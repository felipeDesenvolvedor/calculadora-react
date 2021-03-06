import React from "react"
import styled from "styled-components"

const Container = styled.section`
    display:flex;
    flex-direction:column;
    align-content:flex-end;
    width:300px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    background-color:var(--color-default);
    padding:1px;
    font-size:18px;

    @media (min-width:400px) {
      width:380px;
    }
`

export default Container