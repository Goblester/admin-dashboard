import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Divider from "@mui/material/Divider/Divider";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import React from "react";


type SettingsNotificationsProps = {}

export const SettingsNotifications: React.FC<SettingsNotificationsProps> = (props) => (
    <form {...props}>
        <Card>
            <CardHeader
                subheader="Manage the notifications"
                title="Notifications"
            />
            <Divider/>
            <CardContent>
                <Grid container
                      spacing={6}
                      wrap="wrap">
                    <Grid item
                          md={4}
                          sm={6}
                          sx={{
                              display: 'flex',
                              flexDirection: 'column'
                          }}
                          xs={12}>
                        <Typography color="textPrimary"
                                    gutterBottom
                                    variant="h6">
                            Notifications
                        </Typography>
                        <FormControlLabel control={(
                            <Checkbox
                                color="primary"
                                defaultChecked/>)}
                                          label="Email"/>
                        <FormControlLabel control={(
                            <Checkbox
                                color="primary"
                                defaultChecked
                            />)}
                                          label="Push Notifications"/>
                        <FormControlLabel control={<Checkbox/>}
                                          label="Text Messages"/>
                        <FormControlLabel control={(
                            <Checkbox
                                color="primary"
                                defaultChecked/>
                        )}
                                          label="Phone calls"/>
                    </Grid>
                    <Grid item
                          md={4}
                          sm={6}
                          sx={{
                              display: 'flex',
                              flexDirection: 'column'
                          }}
                          xs={12}>
                        <Typography color="textPrimary"
                                    gutterBottom
                                    variant="h6">
                            Messages
                        </Typography>
                        <FormControlLabel control={(
                            <Checkbox
                                color="primary"
                                defaultChecked/>
                        )}
                                          label="Email"/>
                        <FormControlLabel control={<Checkbox/>}
                                          label="Push Notifications"/>
                        <FormControlLabel control={(
                            <Checkbox
                                color="primary"
                                defaultChecked/>
                        )}
                                          label="Phone calls"/>
                    </Grid>
                </Grid>
            </CardContent>
            <Divider/>
            <Box sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2
            }}>
                <Button color="primary"
                        variant="contained">
                    Save
                </Button>
            </Box>
        </Card>
    </form>
);
