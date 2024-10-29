import styled from 'styled-components'
import React from 'react'

import { flexCSS } from 'src/common/styled/common.styled'
import bigStar from 'src/assets/icons/BigStar.svg'
import { colors } from 'src/common/styled/constants'
import { defaultMain } from 'src/common/styled/common.styled'
import { Button } from 'src/components/Basic/Button/Button.styled'

export const DevicePageStyled = styled.article`
  ${defaultMain};
  padding: 20px;
`

export const DevicePageHeaderStyled = styled.header`
  ${flexCSS({wrap: 'nowrap', justify: 'space-between', gap: '20px'})};
  position: relative;
  height: 350px;
`

export const DevicePageRateHolderStyled = styled.section`
  ${flexCSS({direction:'column', wrap: 'nowrap'})}
  height: 100%;
  flex-shrink: 0;
  flex-basis: 30%;
  background: url(${bigStar}) no-repeat center content-box;
  filter: sepia(1);
  
  &:after {
    position: absolute;
    top: 50%;
    font-size: 30px;
    content: attr(data-rate);
  }
`

export const DevicePageBuyCardStyled = styled.section`
  ${flexCSS({direction: 'column', justify: 'space-evenly'})}
  height: 100%;
  flex-basis: 25%;
  background: radial-gradient(circle, rgba(${colors.orangeLight}, .2) 20%, rgba(${colors.orangeLight}, .2) 80%, transparent);
  font-size: 20px;
  border-radius: 4px;
`

export  const DevicePageBuyCardButtonStyled = ({children}) => {
  return (
    <Button
      $FontSize='16px'
      $Padding='16px 20px'
      $BackgroundColor={colors.orangeLight}
      $Color={`rgb(${colors.blackLight})`}
      $BorderColor={`rgb(${colors.blackLight}, .3)`}
      $FontWeight='bold'
    >
      {children}
    </Button>
  )
}
