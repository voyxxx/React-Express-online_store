import * as Styled from './AuthForm.styled'
import { colors } from 'src/common/styled/constants'
import React from "react";

import { AuthInput } from './components/Input'
import Link from 'src/components/Link/Link';
import Button from 'src/components/Basic/Button'
import { REGISTRATION_ROUTE } from 'src/utils/const';

const Auth = () => {
  return (
    <Styled.AuthForm
      onSubmit={(e) => {
        e.preventDefault()
        console.log('form submit')
      }}
    >
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
      <div className="loginButton-row">
        Нет аккаунта,
        <Link
          to={REGISTRATION_ROUTE}
          css={{
            color: colors.violet,
            padding: '0 0 0 4px',
          }}
        >
          зарегистрируйтесь
        </Link>
        <Button
          type='submit'
          margin='0 0 0 auto'
          padding='8px 24px'
          backgroundColor={`rgb(${colors.orangeLight})`}
        >
          Войти
        </Button>
      </div>
    </Styled.AuthForm>
  );
};

export default Auth; 