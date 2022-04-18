import React from 'react';
import {useField} from 'formik';
import {TextFieldProps} from "@mui/material";
import TextField from "@mui/material/TextField"

type TextFieldWrapperProps = TextFieldProps

const TextFieldWrapper: React.FC<TextFieldWrapperProps> = (props) => {

    const {
        name
    } = props

    const [field, meta] = useField(name || '');


    return (
        <TextField color={!!meta.error && meta.touched ? 'error' : 'primary'}
                   helperText={meta.touched && meta.error}
                   variant={'outlined'}
                   required={true}
                   fullWidth={true}
                   {...field}
                   {...props}/>
    );
};

export default TextFieldWrapper;
