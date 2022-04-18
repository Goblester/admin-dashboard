import React from "react";
import {Search as SearchIcon} from '../../shared/UI/Icons/search';
import {Upload as UploadIcon} from '../../shared/UI/Icons/upload';
import {Download as DownloadIcon} from '../../shared/UI/Icons/download';
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import Button from "@mui/material/Button/Button";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SvgIcon from "@mui/material/SvgIcon/SvgIcon";
import CardContent from "@mui/material/CardContent/CardContent";

type CustomerListToolbarProps = {}

const CustomerListToolbar: React.FC<CustomerListToolbarProps> = (props) => (
    <Box {...props}>
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                m: -1
            }}
        >
            <Typography
                sx={{m: 1}}
                variant="h4"
            >
                Customers
            </Typography>
            <Box sx={{m: 1}}>
                <Button
                    startIcon={(<UploadIcon fontSize="small"/>)}
                    sx={{mr: 1}}
                >
                    Import
                </Button>
                <Button
                    startIcon={(<DownloadIcon fontSize="small"/>)}
                    sx={{mr: 1}}
                >
                    Export
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                >
                    Add Customers
                </Button>
            </Box>
        </Box>
        <Box sx={{mt: 3}}>
            <Card>
                <CardContent>
                    <Box sx={{maxWidth: 500}}>
                        <TextField
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SvgIcon
                                            color="action"
                                            fontSize="small"
                                        >
                                            <SearchIcon/>
                                        </SvgIcon>
                                    </InputAdornment>
                                )
                            }}
                            placeholder="Search customer"
                            variant="outlined"
                        />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    </Box>
);
