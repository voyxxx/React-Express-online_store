import React from "react";

import * as Styled from './Button.styled'

const Button = ({children, ...props}) => {
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
      $FontSize={props.fontSize}
      $Height={props.height}
      $Margin={props.margin}
      $Padding={props.padding}
      $Width={props.width}
    >
      {children}
    </Styled.Button>
  )
}

export default Button