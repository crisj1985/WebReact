import React from 'react'
import styled from 'styled-components'
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #d9dbf9;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

const NavBar = () => {
    return (
      <Nav>
        <div className="logo">NavBar</div>
        <Burger/>
      </Nav>
    );
}

export default NavBar
