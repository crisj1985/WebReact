import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  background-color: #7289da;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 2rem;
  transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0%)")};
  transition: transform 0.3s ease-in-out;

  li {
    padding: 20px 8px;
    color: white;
    font-family: "Gayathri", serif;
    font-size: 24px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    padding-top: 4px;
    width: 500px;
    background-color: rgba(0, 0, 0, 0);
    li {
      padding: 15px 12px;
      color: black;
      font-family: "Gayathri", serif;
      font-size: 20px;
    }
  }
`;

const RigthNav = ({open}) => {
    return (
      <Ul open={open}>
          <li>Home</li>
          <li>Productos</li>
          <li>Iniciar Sesion</li>
          <li>Registrarse</li>
      </Ul>
    );
}

export default RigthNav
