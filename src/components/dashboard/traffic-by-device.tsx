import React from "react";
import {Doughnut} from 'react-chartjs-2';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletIcon from '@mui/icons-material/Tablet';
import {OverridableComponent} from "@mui/material/OverridableComponent";
import Card from "@mui/material/Card/Card";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import Divider from "@mui/material/Divider/Divider";
import CardContent from "@mui/material/CardContent/CardContent";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import {SvgIconTypeMap, useTheme} from "@mui/material";

const devices = [
    {
        title: 'Desktop',
        value: 63,
        icon: LaptopMacIcon,
        color: '#3F51B5'
    },
    {
        title: 'Tablet',
        value: 15,
        icon: TabletIcon,
        color: '#E53935'
    },
    {
        title: 'Mobile',
        value: 23,
        icon: PhoneIcon,
        color: '#FB8C00'
    }
]

type DeviceType = {
    title: string
    value: number
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string }
    color: string
}

type TrafficByDeviceProps = {
    devices: Array<DeviceType>
}


export const TrafficByDevice: React.FC<TrafficByDeviceProps> = (props) => {
    const theme = useTheme();

    const {
        devices,
        ...rest
    } = props

    const data = {
        datasets: [
            {
                data: [63, 15, 22],
                backgroundColor: ['#3F51B5', '#e53935', '#FB8C00'],
                borderWidth: 8,
                borderColor: '#FFFFFF',
                hoverBorderColor: '#FFFFFF'
            }
        ],
        labels: ['Desktop', 'Tablet', 'Mobile']
    };

    const options = {
        animation: false,
        cutoutPercentage: 80,
        layout: {padding: 0},
        legend: {
            display: false
        },
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: 'index',
            titleFontColor: theme.palette.text.primary
        }
    };


    return (
        <Card {...rest}>
            <CardHeader title="Traffic by Device"/>
            <Divider/>
            <CardContent>
                <Box sx={{
                    height: 300,
                    position: 'relative'
                }}>
                    <Doughnut data={data}
                              options={options}/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    pt: 2
                }}>
                    {devices.map(({
                                      color,
                                      icon: Icon,
                                      title,
                                      value
                                  }) => (
                        <Box
                            key={title}
                            sx={{
                                p: 1,
                                textAlign: 'center'
                            }}
                        >
                            <Icon color="action"/>
                            <Typography color="textPrimary"
                                        variant="body1">
                                {title}
                            </Typography>
                            <Typography style={{color}}
                                        variant="h4">
                                {value}%
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};
