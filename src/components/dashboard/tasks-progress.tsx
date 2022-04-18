import React from "react";
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import Avatar from "@mui/material/Avatar/Avatar";
import Box from "@mui/material/Box/Box";
import LinearProgress from "@mui/material/LinearProgress/LinearProgress";

type TasksProgressProps = {}

export const TasksProgress: React.FC<TasksProgressProps> = (props) => {


    return (
        <Card
            sx={{height: '100%'}}
            {...props}
        >
            <CardContent>
                <Grid container
                      spacing={3}
                      sx={{justifyContent: 'space-between'}}>
                    <Grid item>
                        <Typography color="textSecondary"
                                    gutterBottom
                                    variant="overline">
                            TASKS PROGRESS
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h4"
                        >
                            75.5%
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar sx={{
                            backgroundColor: 'warning.main',
                            height: 56,
                            width: 56
                        }}>
                            <InsertChartIcon/>
                        </Avatar>
                    </Grid>
                </Grid>
                <Box sx={{pt: 3}}>
                    <LinearProgress value={75.5}
                                    variant="determinate"/>
                </Box>
            </CardContent>
        </Card>
    )
}
