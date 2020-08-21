import React, {useState} from 'react'
import styled from 'styled-components'

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 12px;
  right: 20px;
  position: fixed;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;

  div {
    width: 2rem;
    height: 0.26rem;
    background-color: #333;
    border-radius:10px;
  }
`;

const Burger = () => {

    const{open, setOpen} = false;
    return (
        <StyledBurger>
            <div/>
            <div/>
            <div/>
        </StyledBurger>
    )
}

export default Burger
