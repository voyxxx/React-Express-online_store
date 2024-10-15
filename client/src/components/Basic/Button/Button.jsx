import React from "react";

import * as Styled from './Button.styled'

const Button = (props) => {
  return (
    <Styled.Button
      className={props.className}
      type={props.type}
      placeholder={props.placeholder}
      style={props.css}
      onClick={props.onClick}
      $AlignSelf={props.alignSelf}
      $BackgroundColor={props.backgroundColor}
      $Border={props.border}
      $BorderColor={props.borderColor}
      $Color={props.color}
      $Height={props.height}
      $Padding={props.padding}
      $Width={props.width}
    >
      Войти
    </Styled.Button>
  )
}

export default Button