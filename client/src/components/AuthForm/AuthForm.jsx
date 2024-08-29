import * as Styled from './AuthForm.styled'
import { colors } from 'src/common/styled/constants';
import React from "react";

import {AuthInput} from './components/Input';

const Auth = () => {
  return (
    <Styled.AuthForm>
      <h1>Авторизация</h1>
      <AuthInput
        type="text"
        placeholder="Введите ваш email..."
        borderColor={`2px solid rgb(${colors.grey})`}
        onChange={() => console.log('in onChange')}
      />
      <AuthInput
        type="password"
        placeholder="Введите ваш пароль..."
      />
      <button type='submit'>Логин</button>
    </Styled.AuthForm>
  );
};

export default Auth; 