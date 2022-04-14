import React, { useState } from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavBarElements.js';
import { useAuth } from './../../contexts/AuthContext'
import { useHistory } from "react-router-dom"






const Navbar = () => {
  return (
    <>
      <Nav>
          <Bars />
          <NavMenu>
            <NavLink to="/Home" activeStyle>
                Home
            </NavLink>
            <NavLink to="/Calendar" activeStyle>
                Calendar
            </NavLink>
            <NavLink to="/Forum" activeStyle>
                Forums
            </NavLink>
            <NavLink to="/Examiner" activeStyle>
                Examiner
            </NavLink>
            <NavLink to="/Admin" activeStyle>
                Admin
            </NavLink>
          </NavMenu>
          <NavBtn>
              
          </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
