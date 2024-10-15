import * as Styled from './NavBar.styled'

import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'

import { SHOP_ROUTE, LOGIN_ROUTE, ADMIN_ROUTE } from 'src/utils/const'
import { Context } from '../..'
import Link from './components/Link'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  return (
    <Styled.Header>
      <Link 
        to={SHOP_ROUTE}
      >
        Ну и местечко
      </Link>
      {user.isAuth 
        ?
          <Styled.NavBar>
            <Link 
              to={ADMIN_ROUTE}
            >
              Админ панель
            </Link>
            <Link 
              to={SHOP_ROUTE}
              onClick={() => user.setIsAuth(false)}
            >
              Выйти
            </Link>
          </Styled.NavBar>
        :
          <Styled.NavBar>
            <Link 
              to={LOGIN_ROUTE}
              onClick={() => user.setIsAuth(true)}
            >
              Авторизация
            </Link>
          </Styled.NavBar>
      }
    </Styled.Header>
  )
})

export default NavBar;