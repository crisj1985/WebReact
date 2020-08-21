import React, {useState} from 'react'
import styled from 'styled-components'
import RigthNav from './RigthNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 5px;
  right: 20px;
  position: fixed;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  z-index: 20;

  @media (min-width: 768px) {
    display: none;
    
  }

  div {
    width: 2rem;
    height: 0.26rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(100%)" : "translateX(0%)"};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

const Burger = () => {

    const [ open, setOpen ] = useState(true);
    return (
        <>
        <StyledBurger open={open} onClick = {()=>setOpen(!open)} >
            <div/>
            <div/>
            <div/>
        </StyledBurger>
        <RigthNav open={open}/>
        </>
    )
}

export default Burger
