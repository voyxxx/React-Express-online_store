import styled from 'styled-components';

import { flexCSS } from 'src/common/styled/common.styled';
import { colors, sizes } from 'src/common/styled/constants';


export const NavBar = styled.nav`
  ${flexCSS({ gap: '8px' })};
`

export const Header = styled.header`
  height: ${sizes.headerHeight};
  padding: 20px;
  background-color: rgb(${colors.orangeLight});
  box-shadow: inset 0 0 24px 4px rgb(${colors.pinkLight});
  border-radius: 8px;
  ${flexCSS({justify: 'space-between'})};
`


