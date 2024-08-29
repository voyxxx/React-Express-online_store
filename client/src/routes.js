import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Basket from './pages/Basket'
import DevicePage from './pages/DevicePage'
import Shop from './pages/Shop'
import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './utils/const'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
    // name: 'Admin',
    // Component: () => import('./pages/Admin') 
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
    // name: 'Basket',
    // Component: () => import('./pages/Basket')
  },
]

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop
    // name: 'Shop',
    // Component: () => import('./pages/Shop')
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
    // name: 'Admin',
    // Component: () => import('./pages/Admin')
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage,
    // Component: () => import('./pages/DevicePage')
  },
]