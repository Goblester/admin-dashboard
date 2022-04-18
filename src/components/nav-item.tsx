import Box from '@mui/material/Box';
import Button from '@mui/material/Button/Button';
import ListItem from '@mui/material/ListItem/ListItem';
import React, {ReactNode} from "react";
import {NavLink} from "react-router-dom";

type NavItemProps = {
    href: string
    icon: ReactNode
    title: string
}

export const NavItem: React.FC<NavItemProps> = (props) => {
    const {href, icon, title, ...rest} = props;
    const active = false

    return (
        <ListItem disableGutters
                  sx={{
                      display: 'flex',
                      mb: 0.5,
                      py: 0,
                      px: 2
                  }}
                  {...rest}>
            <NavLink
                to={href}>
                <Button component="a"
                    startIcon={icon}
                    disableRipple
                    sx={{
                        backgroundColor: active ? 'rgba(255,255,255, 0.08)': 'inherit',
                        borderRadius: 1,
                        color: active ? 'secondary.main' : 'neutral.300',
                        fontWeight: active ? 'fontWeightBold' : 'inherit',
                        justifyContent: 'flex-start',
                        px: 3,
                        textAlign: 'left',
                        textTransform: 'none',
                        width: '100%',
                        '& .MuiButton-startIcon': {
                            color: active ? 'secondary.main' : 'neutral.400'
                        },
                        '&:hover': {
                            backgroundColor: 'rgba(255,255,255, 0.08)'
                        }
                    }}>
                    <Box sx={{flexGrow: 1}}>
                        {title}
                    </Box>
                </Button>
            </NavLink>
        </ListItem>
    );
};
