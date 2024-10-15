import styled from 'styled-components'

import { colors } from 'src/common/styled/constants';
import { flexCSS } from 'src/common/styled/common.styled';

export const AuthForm = styled.form`
  padding: 20px 40px;
  border: 2px solid rgb(${colors.blackLight});
  border-radius: 4px;
  ${flexCSS({ direction: 'column', justify: 'center' })};

  /* eslint-disable no-unused-vars */
  .loginButton-row {
    ${flexCSS()};
    width: 100%;
  }
`
