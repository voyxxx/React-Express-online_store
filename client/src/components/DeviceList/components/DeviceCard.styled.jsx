import styled from 'styled-components'

import { colors } from 'src/common/styled/constants'
import { flexCSS } from 'src/common/styled/common.styled'
import star from 'src/assets/icons/star.png'

export const DeviceCardStyled = styled.section`
  ${flexCSS({direction: 'column', align: 'flex-start'})};
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: 12px;
  border-radius: 4px;
  background-color: rgb(${colors.orangeLight});
`

export const DeviceCardImgStyled = styled.img`
  width: 100%;
  object-fit: contain;
`

export const DeviceCardFirstRowStyled = styled.div`
  position: relative;
  width: 100%;
  padding: 26px 38px 4px 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(${colors.blackLight});
  
  &:before {
    right: 26px;
    content: attr(data-rate);
    color: rgb(${colors.black});
  }
  &:after {
    right: 8px;
    width: 18px;
    height: 18px;
    background: url(${star}) no-repeat center;
    background-size: contain;
    content: '';
  }

  &:before, &:after {
    position: absolute;
    background-color: rgb(${colors.orangeLight});
  }
`

export const DeviceCardLinkStyled = styled.a`
  padding: 4px 8px;
  color: rgb(${colors.black});
  text-decoration: none;
  
  &:after {
    position: absolute;
    inset: 0;
    content: '';
  }
`
