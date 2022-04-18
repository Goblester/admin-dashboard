import Box from "@mui/material/Box/Box";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";
import Select from "@mui/material/Select";
import {useField} from "formik";
import {ICategory} from "../../entities/category";
import React from "react";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Chip from "@mui/material/Chip/Chip";

type CategoriesProps = {
    categories: Array<ICategory>
}


export const SelectCategory: React.FC<CategoriesProps> = (props) => {

    const {
        categories
    } = props

    const [field, meta] = useField('categories')

    return (
        <FormControl sx={{m: 0, minWidth: 300}}>
            <InputLabel>Категории</InputLabel>
            <Select multiple={true}
                    fullWidth={true}
                    error={!!meta.error && meta.touched}
                    input={<OutlinedInput label="Категории"/>}
                    {...field}
                    renderValue={(selected: Array<ICategory>) => {
                        return (
                            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                                {selected.map((category) => {
                                    return (
                                        <Chip key={category.slug} label={category.name}/>
                                    )
                                })}
                            </Box>
                        )
                    }}>
                {categories.map(category => {
                    return (
                        <MenuItem key={category.slug} value={category as any}>
                            {category.name}
                        </MenuItem>
                    )
                })}
            </Select>
        </FormControl>
    )
}