import React from "react";
import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Card from "@mui/material/Card/Card";
import CardContent from "@mui/material/CardContent/CardContent";
import InputAdornment from "@mui/material/InputAdornment";
import SvgIcon from "@mui/material/SvgIcon";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";
import {Download as DownloadIcon} from '../../shared/UI/Icons/download';
import {Search as SearchIcon} from '../../shared/UI/Icons/search';
import {Upload as UploadIcon} from '../../shared/UI/Icons/upload';

type ProductListToolbarProps = {}

export const ProductListToolbar: React.FC<ProductListToolbarProps> = (props) => (
    <Box {...props}>
        <Box sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            m: -1
        }}>
            <Typography sx={{m: 1}}
                        variant="h4">
                Products
            </Typography>
            <Box sx={{m: 1}}>
                <Button startIcon={(<UploadIcon fontSize="small"/>)}
                        sx={{mr: 1}}>
                    Import
                </Button>
                <Button startIcon={(<DownloadIcon fontSize="small"/>)}
                        sx={{mr: 1}}>
                    Export
                </Button>

            </Box>
        </Box>
        <Box sx={{mt: 3}}>
            <Card>
                <CardContent>
                    <Box sx={{maxWidth: 500}}>
                        <TextField fullWidth
                                   InputProps={{
                                       startAdornment: (
                                           <InputAdornment position="start">
                                               <SvgIcon fontSize="small"
                                                        color="action">
                                                   <SearchIcon/>
                                               </SvgIcon>
                                           </InputAdornment>
                                       )
                                   }}
                                   placeholder="Search product"
                                   variant="outlined"/>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    </Box>
);
