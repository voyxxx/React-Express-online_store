import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from 'src/index'

import { TypeBarStyled } from 'src/components/TypeBar/TypeBar.styled'
import TypeBarItem from 'src/components/TypeBar/components/TypeBarItem'
import { TitleStyled } from 'src/components/Basic/Title.styled'

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <TypeBarStyled>
      <TitleStyled as="h3" $css={{ margin: '8px 0' }}>
        Категории
      </TitleStyled>
      {device.types.map(type => (
        <TypeBarItem
          active={type.id === device.selectedType.id}
          key={type.id}
          onClick={() => {device.setSelectedType(type)}}
        >
          {type.name}
        </TypeBarItem>
      ))}
    </TypeBarStyled>
  )
})

export default TypeBar