import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
 
    list-style: none;
    display: flex;
    flex-flow: column nowrap;

    li {
      padding: 18px 10px;
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
