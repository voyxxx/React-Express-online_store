import React from 'react'
import styled from 'styled-components'

export const TitleStyled = styled(({ as: Component, $css, ...props }) => (
  <Component {...props} />
))`
  margin: ${({$css}) => $css?.margin ? $css?.margin : '0'};
  color: ${({$css}) => $css?.color ? $css?.color : ''};
  font-size: ${({$css}) => $css?.fontSize ? $css?.fontSize : ''};
`;