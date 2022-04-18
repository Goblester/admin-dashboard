import React, {ReactNode} from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box/Box';


const DashboardLayoutRoot = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

type DashboardLayoutProps = {
    Header: ReactNode
    SideBar: ReactNode
}


export const Main: React.FC<DashboardLayoutProps> = (props) => {
    const {
        Header,
        SideBar,
        children
    } = props;

    return (
        <>
            <DashboardLayoutRoot>
                <Box sx={{
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    width: '100%'
                }}>
                    {children}
                </Box>
            </DashboardLayoutRoot>
            {Header}
            {SideBar}
        </>
    );
};

export {DashboardSidebar} from "./dashboard-sidebar";
export {DashboardNavbar} from "./dashboard-navbar";