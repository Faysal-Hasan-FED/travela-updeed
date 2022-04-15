import React from 'react';
import SideBarWDown from '../SideBarDown/SideBarWDown';
import SideBarTop from '../SidebarTop/SideBarTop';

const Sidebar = () => {
    return (
        <div>
            <SideBarTop></SideBarTop>
            <SideBarWDown></SideBarWDown>
        </div>
    );
};

export default Sidebar;