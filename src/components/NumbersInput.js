import React from "react"
import styled from "styled-components"

const NumbersInput = styled.input.attrs(() =>({
    "type":"text",
    "id":"NumbersInput"
}))`
    background-color:transparent;
    border:none;
    letter-spacing:6px;
    text-align:right;
    font-size:14px;
    line-height:100%;
    height:14px;
`

export default NumbersInput