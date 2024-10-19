import React from 'react'

import TypeBar from 'src/components/TypeBar/TypeBar'
import { ShopMainStyled, ShopStyled } from 'src/pages/Shop/Shop.styled'
import BrandBar from 'src/components/BrandBar/BrandBar'
import DeviceList from 'src/components/DeviceList/DeviceList'

const Shop = () => {
  return (
    <ShopStyled>
      <TypeBar/>
      <ShopMainStyled>
        <BrandBar/>
        <DeviceList/>
      </ShopMainStyled>
    </ShopStyled>
  )
}

export default Shop