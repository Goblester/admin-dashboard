import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {useField} from "formik";
import {AttributeType} from "../../entities/attribute";
import React, {useState} from "react";
import getSlugManager from "../../adapters/getSlug/getSlugManger";


type AttributesProps = {
    attributes: Array<AttributeType>
}

export type MultipleAttributeType = {
    nameSlug: string
    name: string
    options: Array<AttributeType>
}


export const AddAttribute: React.FC<AttributesProps> = (props) => {

    const {
        attributes
    } = props

    const [field, meta, {setValue}] = useField('attributes')

    const [pickedAttribute, setPickedAttribute] = useState<MultipleAttributeType | null>(null)
    const startArray = pickedAttribute ? [pickedAttribute] : []
    const attributeSlugs = attributes.reduce((acc: Array<{ name: string, nameSlug: string }>, attribute) => {
        if (acc.some(value => value.nameSlug === attribute.nameSlug) || field.value.some((attr: MultipleAttributeType) => attr.nameSlug === attribute.nameSlug)) {
            return acc
        } else {
            return [...acc, attribute]
        }
    }, startArray)

    const attributeValues = attributes.filter(attr => !pickedAttribute || attr.nameSlug === pickedAttribute.nameSlug)

    return (
        <Grid item container xs={12} spacing={2} alignItems={'start'}>
            <Grid item xs={4}>
                <Autocomplete id={'currentAttribute'}
                              value={pickedAttribute}
                              onChange={(e, value) => {
                                  if (value) {
                                      debugger
                                      if (typeof value === 'string') {
                                          const nameSlug = getSlugManager.getSlug(value)
                                          const name = value
                                          setPickedAttribute({name, nameSlug, options: []})
                                      } else {
                                          const name = value.name
                                          const nameSlug = value.nameSlug
                                          setPickedAttribute({name, nameSlug, options: []})
                                      }
                                  } else {
                                      setPickedAttribute(null)
                                  }
                              }}
                              options={attributeSlugs as Array<{ name: string, nameSlug: string }>}
                              getOptionLabel={option => option.name}
                              freeSolo={true}
                              renderInput={(params) => (
                                  <TextField {...params}
                                             label="Атрибуты"
                                             name={'currentAttribute'}
                                             variant="standard"/>
                              )}/>
            </Grid>
            <Grid item xs={6}>
                {!!pickedAttribute && (
                    <Autocomplete multiple={true}
                                  freeSolo={true}
                                  options={attributeValues}
                                  getOptionLabel={option => option.value}
                                  value={pickedAttribute.options}
                                  onChange={(e, values) => {
                                      debugger
                                      const newOptions = values.map(value => {
                                          if(typeof value === 'string'){
                                              const name = pickedAttribute?.name
                                              const nameSlug = pickedAttribute?.nameSlug
                                              const valueSlug = getSlugManager.getSlug(value)
                                              return {name, nameSlug, value, valueSlug, id: ''}
                                          }
                                          return value
                                      })

                                      setPickedAttribute(prevAttr => prevAttr && {...prevAttr, options: newOptions})
                                  }}

                                  renderInput={(params) =>
                                      <TextField {...params}
                                                 style={{height: '38px'}}
                                                 label="Значения атрибута"
                                                 variant="standard"/>}/>
                )}
            </Grid>
            <Grid item xs={2} display={'flex'} alignItems={'center'}>
                <Button variant={'contained'}
                        disabled={!pickedAttribute?.options.length}
                        onClick={(e) => {
                            if (pickedAttribute?.options.length) {
                                setValue([...field.value, pickedAttribute])
                                setPickedAttribute(null)
                            }
                        }}>Добавить</Button>
            </Grid>
        </Grid>
    )
}