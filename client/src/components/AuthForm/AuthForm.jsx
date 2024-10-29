import * as Styled from './AuthForm.styled'
import { colors } from 'src/common/styled/constants'
import React from "react";
import { useLocation } from 'react-router-dom';

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from 'src/utils/const';
import { AuthInput } from './components/Input'
import Link from 'src/components/Link/Link';
import Button from 'src/components/Basic/Button'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Styled.AuthForm
      onSubmit={(e) => {
        e.preventDefault()
        console.log('form submit')
      }}
    >
      <h1>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
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
        {isLogin
          ? <>
            Нет аккаунта,
            <Link
              to={REGISTRATION_ROUTE}
              css={{
                color: colors.blue,
                padding: '0 0 0 4px',
              }}
            >
              зарегистрируйтесь
            </Link>
          </>
         : <>
            Есть аккаунт,
            <Link
              to={LOGIN_ROUTE}
              css={{
                color: colors.blue,
                padding: '0 0 0 4px',
              }}
            >
              войдите
            </Link>
          </>
        }
        <Button
          type='submit'
          margin='0 0 0 auto'
          padding='12px 32px'
          fontSize='16px'
          backgroundColor={colors.orangeLight}
        >
          {isLogin ? 'Войти' : 'Регистрация'}
        </Button>
      </div>
    </Styled.AuthForm>
  );
};

export default Auth; 