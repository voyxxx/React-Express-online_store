import React from 'react'

import Modal from 'src/components/Basic/Modal'
import { TitleStyled } from 'src/components/Basic/Title.styled'
import { CreateBrandForm, CreateBrandModal } from './CreateBrand.styled'
import { Input } from 'src/components/Basic/Input/Input.styled'
import { colors } from 'src/common/styled/constants'

const CreateBrand = () => {
  return (
    <Modal>
      <CreateBrandModal>
        <TitleStyled
          as={'h2'}
          $css={{
            margin: '0 28px 0 0'
          }}
        >
          Добавить бренд
        </TitleStyled>
        <CreateBrandForm>
          <Input
            placeholder={'Введите название бренда'}
            $MinWidth='100%'
            $FocusBorderColor={colors.orange}
          />
        </CreateBrandForm>
      </CreateBrandModal>
    </Modal>
  )
}

export default CreateBrand