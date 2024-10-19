import styled from 'styled-components'
import { colors } from 'src/common/styled/constants'

export const TypeBarItemStyled = styled.div`
  padding: 8px 0;
  font-weight: 600;
  color: rgb(${colors.blackLight});
  border-radius: 4px;
  cursor: pointer;
  ${({$active}) => $active && `
    background-color: rgb(${colors.orangeLight})
  `}
`