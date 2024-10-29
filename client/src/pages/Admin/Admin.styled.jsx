import styled from 'styled-components'
import React from 'react'

import { defaultMain, flexCSS } from 'src/common/styled/common.styled'
import { Button } from 'src/components/Basic/Button/Button.styled'
import { colors } from 'src/common/styled/constants'


export const AdminHolder = styled.main`
  ${defaultMain}
  ${flexCSS({direction: 'column', align: 'stretch', gap: '40px'})}
  padding: 40px; 
`

export const AdminButton = ({ children }) => {
  return (
    <Button
      $Padding='16px 24px'
      $FontSize='20px'
      $BackgroundColor={colors.orange}
      $Color={`rgb(${colors.brown})`}
    >
      {children}
    </Button>)
}