import React from 'react'
import styled from 'styled-components'
import RigthNav from './RigthNav';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #BBC7D6;
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
        <RigthNav/>
      </Nav>
    );
}

export default NavBar
