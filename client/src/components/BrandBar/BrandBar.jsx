import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from 'src/index'
import { BrandBarStyled } from 'src/components/BrandBar/BrandBar.styled'
import BrandBarItem from 'src/components/BrandBar/components/BrandBarItem'

const BrandBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <BrandBarStyled>
      {device.brands.map(brand => (
          <BrandBarItem
            key={brand.id}
            active={brand.id === device.selectedBrand.id}
            onClick={() => device.setSelectedBrand(brand)}
          >
            {brand.name}
          </BrandBarItem>
      ))}
    </BrandBarStyled>
  )
})

export default BrandBar