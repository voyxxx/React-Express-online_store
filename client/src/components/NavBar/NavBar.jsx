import * as Styled from './NavBar.styled';
import { colors } from 'src/common/styled/constants';

import React, { useContext } from "react";
import { observer } from 'mobx-react-lite';

import { Context } from "../..";
import Link from 'src/components/Link/Link';
import { SHOP_ROUTE, LOGIN_ROUTE } from "../../utils/const";

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
              to={LOGIN_ROUTE}
              css={{
                borderColor: colors.red,
                bgColor: colors.pinkLight
              }}
            >
              Админ панель
            </Link>
            <Link 
              to={LOGIN_ROUTE}
              css={{
                borderColor: colors.red,
                bgColor: colors.pinkLight
              }}
            >
              Выйти
            </Link>
          </Styled.NavBar>
        :
          <Styled.NavBar>
            <Link 
              to={LOGIN_ROUTE}
              css={{
                borderColor: colors.red,
                bgColor: colors.pinkLight
              }}
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