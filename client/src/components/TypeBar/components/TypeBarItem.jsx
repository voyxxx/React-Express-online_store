import React from 'react'

import { TypeBarItemStyled } from 'src/components/TypeBar/components/TypeBarItem.styled'

const TypeBarItem = ({children, ...props}) => {
  return (
    <TypeBarItemStyled
      onClick={props.onClick}
      $active={props.active}
    >
      {children}
    </TypeBarItemStyled>
  )
}

export default TypeBarItem