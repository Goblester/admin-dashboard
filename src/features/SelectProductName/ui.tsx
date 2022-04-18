import React, {memo} from "react";
import {Grid} from "@mui/material";
import TextFieldWrapper from "../../shared/FormsUI/Textfield";


export const ProductName: React.FC = memo(() => {
    return <>
        <Grid item xs={12}>
            <TextFieldWrapper name={'productName.title'}
                              label={'title'}/>
        </Grid>
        <Grid item xs={12}>
            <TextFieldWrapper name={'productName.subtitle'}
                              label={'subtitle'}/>
        </Grid>
    </>
})