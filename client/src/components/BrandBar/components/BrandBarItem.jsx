import React from 'react'

import { BrandBarItemStyled } from './BrandBarItem.styled'

const BrandBarItem = ({children, ...props}) => {
  return (
    <BrandBarItemStyled
      onClick={props.onClick}
      $active={props.active}
    >
      {children}
    </BrandBarItemStyled>
  )
}

export default BrandBarItem