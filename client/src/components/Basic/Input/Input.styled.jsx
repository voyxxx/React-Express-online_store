import styled from 'styled-components'
import { colors } from 'src/common/styled/constants'

export const Input = styled.input`
  min-width: ${({$MinWidth}) => $MinWidth ? $MinWidth : '400px'};
  padding: 8px 16px;
  border:  ${({$BorderColor}) => $BorderColor ? $BorderColor : `2px solid rgb(${colors.grey})`};
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border: ${({$FocusBorderColor}) => $FocusBorderColor ? `2px solid rgb(${$FocusBorderColor})` : `2px solid rgb(${colors.black})`};;
  }
`