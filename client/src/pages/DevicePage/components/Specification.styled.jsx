import styled from 'styled-components'

import { colors } from 'src/common/styled/constants'

export const SpecificationHolder = styled.div`
  margin: 24px 0;
`

export const SpecificationRow = styled.div`
  padding: 12px 8px;
  background-color: ${({$Idx}) => $Idx % 2 === 0 ? `rgb(${colors.grey})` : `rgba(${colors.yellow}, .1)`};
`