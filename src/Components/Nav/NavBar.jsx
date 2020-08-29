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
  color: black;
  background-color: #edebea;
  .logo {
    padding: 08px 0;
    font-family: "Niconne";
    text-shadow: 3px 3px 3px #aaa;
    font-size: 32px;
  }
`;

const NavBar = () => {
    return (
      <Nav>
        <div className="logo">CRD</div>
        <Burger/>
      </Nav>
    );
}

export default NavBar
