import React, {ChangeEvent, useState} from 'react';
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import TextField from "@mui/material/TextField/TextField";
import CardHeader from '@mui/material/CardHeader/CardHeader';
import Divider from '@mui/material/Divider/Divider';

type SettingsPasswordProps = {

}

export const SettingsPassword: React.FC<SettingsPasswordProps> = (props) => {
    const [values, setValues] = useState({
        password: '',
        confirm: ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    return (
        <form {...props}>
            <Card>
                <CardHeader subheader="Update password"
                            title="Password"/>
                <Divider/>
                <CardContent>
                    <TextField fullWidth
                               label="Password"
                               margin="normal"
                               name="password"
                               onChange={handleChange}
                               type="password"
                               value={values.password}
                               variant="outlined"/>
                    <TextField fullWidth
                               label="Confirm password"
                               margin="normal"
                               name="confirm"
                               onChange={handleChange}
                               type="password"
                               value={values.confirm}
                               variant="outlined"/>
                </CardContent>
                <Divider/>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2
                }}>
                    <Button color="primary"
                            variant="contained">
                        Update
                    </Button>
                </Box>
            </Card>
        </form>
    );
};
