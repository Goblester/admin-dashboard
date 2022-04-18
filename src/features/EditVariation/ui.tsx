import React from "react";
import {useField} from "formik";
import Grid from "@mui/material/Grid";
import TextFieldWrapper from "../../shared/FormsUI/Textfield";
import SelectWrapper from "../../shared/FormsUI/Select";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import {AttributeType} from "../../entities/attribute";
import {mockAttributes} from "../../__mocks__/attributes";


type EditVariationProps = {
    index: number
}


export const EditVariation: React.FC<EditVariationProps> = (props) => {

    const {
        index
    } = props

    const [field] = useField(`variations[${index}].attributes`)



    return (
        <Grid container spacing={2}>
            <Grid item xs={12} container spacing={2}>
                <Grid item xs={4}>
                    <TextFieldWrapper name={`variations[${index}].price.regular`}
                                      label={'цена'}/>
                </Grid>
                <Grid item xs={4}>
                    <TextFieldWrapper name={`variations[${index}].price.percentDiscount`}
                                      label={'скидка'}/>
                </Grid>
                <Grid item xs={4}>
                    <TextFieldWrapper name={`variations[${index}].price.sale`}
                                      label={'скидочная цена'}/>
                </Grid>
            </Grid>
            <Grid item xs={12} container spacing={2}>

                {field.value.map((attribute: AttributeType, i: number) => {
                    return (
                        <Grid item xs={6}>
                            <SelectWrapper name={`variations[${index}].attributes[${i}]`}
                                           renderValue = {(value: unknown) => {
                                               if(typeof value === 'object'){
                                                   const attr = value as any
                                                   return <>{attr.value}</>
                                               }
                                           }}
                                           label={attribute.name} multiple={false}>
                                {mockAttributes.filter(attr => attr.nameSlug === attribute.nameSlug).map((attribute) => {
                                    return (
                                        <MenuItem key={attribute.valueSlug}
                                                  value={attribute as any}>{attribute.value}</MenuItem>)
                                })}
                            </SelectWrapper>
                        </Grid>
                    )
                })}
            </Grid>

        </Grid>
    )
}