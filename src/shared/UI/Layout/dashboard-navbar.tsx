import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Bell as BellIcon} from '../Icons/bell';
import {UserCircle as UserCircleIcon} from '../Icons/user-circle';
import {Users as UsersIcon} from '../Icons/users';
import React from "react";
import AppBar from '@mui/material/AppBar/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import Box from '@mui/material/Box/Box';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar/Avatar';
import {AppThemeType} from "../../../app/theme";
import {useTheme} from "@mui/material";

type DashboardNavbarRootProps = {
    theme: AppThemeType
}

const DashboardNavbarRoot = styled(AppBar)(({theme}: DashboardNavbarRootProps) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
}));

type DashboardNavbarProps = {
    onSidebarOpen: () => void
}

export const DashboardNavbar: React.FC<DashboardNavbarProps> = (props) => {
    const {onSidebarOpen, ...rest} = props;
    const theme = useTheme()
    return (
        <>
            <DashboardNavbarRoot theme={theme}
                                 sx={{
                                     left: {
                                         lg: 280
                                     },
                                     width: {
                                         lg: 'calc(100% - 280px)'
                                     }
                                 }}
                                 {...rest}>
                <Toolbar disableGutters
                         sx={{
                             minHeight: 64,
                             left: 0,
                             px: 2
                         }}>
                    <IconButton onClick={onSidebarOpen}
                                sx={{
                                    display: {
                                        xs: 'inline-flex',
                                        lg: 'none'
                                    }
                                }}>
                        <MenuIcon fontSize="small"/>
                    </IconButton>
                    <Tooltip title="Search">
                        <IconButton sx={{ml: 1}}>
                            <SearchIcon fontSize="small"/>
                        </IconButton>
                    </Tooltip>
                    <Box sx={{flexGrow: 1}}/>
                    <Tooltip title="Contacts">
                        <IconButton sx={{ml: 1}}>
                            <UsersIcon fontSize="small"/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Notifications">
                        <IconButton sx={{ml: 1}}>
                            <Badge badgeContent={4}
                                   color="primary"
                                   variant="dot">
                                <BellIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                    </Tooltip>
                    <Avatar sx={{
                        height: 40,
                        width: 40,
                        ml: 1
                    }}
                            src="/static/images/avatars/avatar_1.png">
                        <UserCircleIcon fontSize="small"/>
                    </Avatar>
                </Toolbar>
            </DashboardNavbarRoot>
        </>
    );
};

