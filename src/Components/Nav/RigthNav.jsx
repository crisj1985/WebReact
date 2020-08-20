import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  background-color:#BBC7D6;
  position: fixed;
  top:0;
  right:0;
  height:100vh;
  width:300px;
  padding-top:2rem;

   li {
    padding: 20px 8px;
  }
`;

const RigthNav = () => {
    return (
      <Ul>
          <li>Home</li>
          <li>Productos</li>
          <li>Iniciar Sesion</li>
          <li>Registrarse</li>
      </Ul>
    );
}

export default RigthNav
