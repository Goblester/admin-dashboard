import React from 'react';
import {useField} from 'formik';
import Select, {SelectProps} from "@mui/material/Select";
import FormControl from "@mui/material/FormControl/FormControl";
import InputLabel from "@mui/material/InputLabel/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput/OutlinedInput";

type SelectWrapperProps = SelectProps & {
    name: string
    label: string
}

const SelectWrapper: React.FC<SelectWrapperProps> = (props) => {

    const {
        name,
        label,
        children
    } = props

    const [field, meta] = useField(name);


    return (
        <FormControl sx={{m: 0, minWidth: 300}}>
            <InputLabel>{label}</InputLabel>
            <Select multiple={false}
                    fullWidth={true}
                    error={!!meta.error && meta.touched}
                    input={<OutlinedInput label={label}/>}
                    {...props}
                    {...field}>
                {children}
            </Select>
        </FormControl>
    );
};

export default SelectWrapper;
