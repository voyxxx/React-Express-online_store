import * as Styled from './NavBar.styled'

import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'

import { SHOP_ROUTE, LOGIN_ROUTE, ADMIN_ROUTE } from 'src/utils/const'
import { Context } from '../..'
import BaseLink from './../Link/Link'
import Link from './components/Link'

const NavBar = observer(() => {
  const { user } = useContext(Context)

  return (
    <Styled.Header>
      <BaseLink
        to={SHOP_ROUTE}
        $Link
      >
        Ну и местечко
      </BaseLink>
      {user.isAuth 
        ?
          <Styled.NavBar>
            <Link
              to={ADMIN_ROUTE}
              // onClick={() => history(ADMIN_ROUTE)}
            >
              Админ панель
            </Link>
            <Link
              to={SHOP_ROUTE}
              onClick={() => user.setIsAuth(false)}
              // onClick={() => history(SHOP_ROUTE)}
            >
              Выйти
            </Link>
          </Styled.NavBar>
        :
          <Styled.NavBar>
            <Link
              to={LOGIN_ROUTE}
              onClick={() => user.setIsAuth(true)}
              // onClick={() => history(LOGIN_ROUTE)}
            >
              Авторизация
            </Link>
          </Styled.NavBar>
      }
    </Styled.Header>
  )
})

export default NavBar