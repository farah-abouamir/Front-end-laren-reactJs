 import React from 'react'
 import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
const  Navbar= () => {
    return (
        <>
        <Nav>
        <NavLink to='/'>
        <h1>logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Acceuil
          </NavLink>
          <NavLink to='/documentation' activeStyle>
            Documentation
          </NavLink>
          <NavLink to='/depot' activeStyle>
            Déposer la demande
          </NavLink>
          <NavLink to='/suivre' activeStyle>
            Suivre la demande
          </NavLink>
          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>  
            
    );
};

export default Navbar
