import styled from 'styled-components'

import { colors, sizes } from 'src/common/styled/constants'

export const ShopStyled = styled.div`
  display: flex;
  padding: 24px;
  min-height: calc(100dvh - ${sizes.headerHeight});
  background-color: rgba(${colors.yellow}, .1);
`

export const ShopMainStyled = styled.div`
  width: 75%;
`