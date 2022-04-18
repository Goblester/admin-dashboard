import React, {memo} from "react";
import {Tab, Tabs} from "@mui/material";


type TabsProps = {
    activeTab: number
    onChange: (newTab: number) => void
    tabs: Array<string>
}

const TabsWrapper: React.FC<TabsProps> = memo((props) => {
    const {
        activeTab,
        onChange,
        tabs
    } = props

    return (
        <Tabs value={activeTab} onChange={(e, newValue) => onChange(newValue)}>
            {tabs.map(tab => <Tab key={tab} label={tab}/>)}
        </Tabs>
    )
})


export default TabsWrapper