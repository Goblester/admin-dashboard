import {AttributeType} from "../../entities/attribute";
import React from "react";
import {useField} from "formik";
import Table from "@mui/material/Table/Table";
import TableHead from "@mui/material/TableHead/TableHead";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import TableBody from "@mui/material/TableBody/TableBody";
import {AutocompleteSpan} from "../../shared/UI/AutocompleteSpan/AutocompleteSpan";
import {MultipleAttributeType} from "../AddAttribute/ui";
import Grid from "@mui/material/Grid/Grid";
import IconButton from "@mui/material/IconButton/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";


type AttributeTableProps = {
    attributes: Array<AttributeType>
}

export const ChangeAttribute: React.FC<AttributeTableProps> = (props) => {

    const {
        attributes
    } = props

    const [field, meta, {setValue}] = useField('attributes')


    return (
        <Grid item xs={12}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Атрибут</TableCell>
                        <TableCell>Значение атрибута</TableCell>
                        <TableCell>Управление</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {field.value.map((attribute: MultipleAttributeType) => <TableRow>
                        <TableCell>
                            {attribute.name}
                        </TableCell>
                        <TableCell>
                            <AutocompleteSpan value={attribute.options}
                                              options={attributes.filter(attr => attr.nameSlug === attribute.nameSlug)}
                                              getValueLabel={(option) => option.value}
                                              onDelete={(delOption) => {
                                                  setValue(field.value.map((attr: MultipleAttributeType) => attr.nameSlug === attribute.nameSlug ?
                                                      {
                                                          ...attr,
                                                          options: attr.options.filter(option => option.valueSlug !== delOption.valueSlug)
                                                      } : attr
                                                  ))
                                              }}
                                              onChange={(newOptions) => {
                                                  if (!!newOptions && !!newOptions.length) {
                                                      setValue(field.value.map((attr: MultipleAttributeType) => attr.nameSlug === attribute.nameSlug ?
                                                          {...attr, options: newOptions} : attr
                                                      ))

                                                  }
                                              }}
                                              label={'Значения атрибута'}/>
                        </TableCell>
                        <TableCell>
                            <IconButton onClick={() => {
                                setValue(field.value.filter((attr: MultipleAttributeType) => attr.nameSlug !== attribute.nameSlug))
                            }}>
                                <DeleteIcon/>
                            </IconButton>
                        </TableCell>
                    </TableRow>)}
                </TableBody>
            </Table>
        </Grid>
    )
}