import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>About us</SidebarLink>
          <SidebarLink to='discover' onClick={toggle}>How it works</SidebarLink>
          <SidebarLink to='services' onClick={toggle}>Our Services</SidebarLink>
          <SidebarLink to='domain' onClick={toggle}>Topics</SidebarLink>
          <SidebarLink to='signup' onClick={toggle}>Book a Session</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Contact us</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
