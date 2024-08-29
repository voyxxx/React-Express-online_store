import styled from 'styled-components'


import { sizes } from 'src/common/styled/constants';
import { flexCSS } from 'src/common/styled/common.styled';

export const AuthHolder = styled.div`
  height: calc(100vh - ${sizes.headerHeight});
  width: 100vw;
  ${flexCSS({ justify: 'center' })};
`