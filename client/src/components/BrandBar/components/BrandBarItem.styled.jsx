import styled from 'styled-components'
import { colors } from 'src/common/styled/constants'

export const BrandBarItemStyled = styled.div`
  padding: 8px 16px;
  font-weight: 600;
  color: rgb(${colors.blackLight});
  border-radius: 4px;
  cursor: pointer;
  ${({$active}) => $active && `
    background-color: rgb(${colors.orangeLight})
  `}
`