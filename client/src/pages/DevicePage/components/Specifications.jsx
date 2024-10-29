import React from 'react'

import { TitleStyled } from 'src/components/Basic/Title.styled'
import { SpecificationHolder, SpecificationRow } from './Specification.styled'
const Specifications = () => {
  const description = [
    {id: 1, title: 'Оперативная память', description: '5 гб'},
    {id: 2, title: 'Камера', description: '12 мп'},
    {id: 3, title: 'Процессор', description: 'Snapdragon 8gen2'},
    {id: 4, title: 'Экран', description: 'Amoled'},
    {id: 5, title: 'Аккумулятор', description: '5000'},
  ]
  return (
    <SpecificationHolder>
      <TitleStyled
        as='h2'
        $css={{
          margin: '12px 0',
        }}
      >
        Характеристики:
      </TitleStyled>
      {description.map((info, idx) =>
        <SpecificationRow key={info.id}
          $BackgroundColor={idx%2===0 ? 'red' : 'purple'}
          $Idx={idx}
        >
          {info.title}: {info.description}
        </SpecificationRow>
      )}
    </SpecificationHolder>
  )
}

export default Specifications