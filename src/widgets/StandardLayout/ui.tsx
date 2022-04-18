import React, {memo, useState} from "react";
import * as Layout from 'shared/UI/Layout';




export const StandardLayout: React.FC = memo(({children}) => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(true)


    const onSideBarClose = () => setIsSideBarOpen(false)
    const onSideBarOpen = () => setIsSideBarOpen(true)


    return (
        <Layout.Main Header={<Layout.DashboardNavbar onSidebarOpen={onSideBarOpen}/>}
                     SideBar={<Layout.DashboardSidebar open={isSideBarOpen}  onClose={onSideBarClose}/>}>
            {children}
        </Layout.Main>
    )
})
