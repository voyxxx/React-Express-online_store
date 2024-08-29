import React from "react";

import * as Styled from './Input.styled'

const Input = (props) => {
  return (
    <Styled.Input
      className={props.className}
      type={props.type} 
      placeholder={props.placeholder} 
      style={props.css}
      $BorderColor={props.borderColor}
      onChange={props.onChange}
    />
  )
}

export default Input