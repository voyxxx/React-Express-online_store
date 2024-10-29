import styled from 'styled-components'
import React from 'react'

import { colors } from 'src/common/styled/constants'
import { flexCSS } from 'src/common/styled/common.styled'
import { Button } from 'src/components/Basic/Button/Button.styled'

export const ModalShading = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(${colors.blackLight}, .7);
`

export const ModalStyled = styled.div`
  ${flexCSS({direction: 'column', align: 'flex-start'})};
  position: absolute;
  top: 20%;
  left: calc(50% - 250px);
  min-width: 500px;
  background-color: rgb(${colors.orangeLight});
  border-radius: 4px;
`

export const CrossClose = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 45px;
  height: 45px;
  background: none;
  border: none;
  padding: 0;
  font-size: 0;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 12px;
    right: 18px;
    width: 4px;
    height: 20px;
    transform-origin: center;
    background-color: rgba(${colors.blackLight}, .8);
  }
  &::before {
    transform: rotate(45deg);
    
  }
  &::after {
    transform: rotate(135deg);
  }
  &:hover {
    &::before, &::after {
      box-shadow: 0 0 2px 1px rgba(${colors.blackLight}, .8);
    }
  }
`

export const FooterRow = styled.div`
  width: 100%;
  margin: auto 0 0;
  padding: 12px;
  text-align: end;
`

export const ButtonCLose = (props) => {
  return (
    <Button
      {...props}
      $BorderColor={`rgb(${ colors.red })`}
      $Color={`rgb(${ colors.red })`}
      $FontSize='20px'
      $BackgroundColor={colors.orangeLight}
      $Margin='0 16px'
    />
  )
}

export const ButtonAdd = (props) => {
  return (
    <Button
      {...props}
      $BorderColor={`rgb(${ colors.green })`}
      $Color={`rgb(${ colors.green })`}
      $FontSize='20px'
      $BackgroundColor={colors.orangeLight}
    />
  )
}