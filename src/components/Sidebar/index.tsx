import React from 'react';
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrap } from './SidebarElements';
interface SidebarProps {
    isOpen: boolean,
    toggle: () => void;
}
const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizza</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Others</SidebarLink>
            </SidebarMenu>
            <SidebarWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SidebarWrap>
        </SidebarContainer>
    )
}

export default Sidebar;