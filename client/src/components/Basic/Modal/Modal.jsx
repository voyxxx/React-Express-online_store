import React from 'react'
import {
  ButtonAdd,
  ButtonCLose,
  CrossClose,
  FooterRow,
  ModalShading,
  ModalStyled
} from 'src/components/Basic/Modal/Modal.styled'

const Modal = ({children}, props) => {
  return (
    <ModalShading>
      <ModalStyled
      >
        <CrossClose
          type='button'
        >Закрыть
        </CrossClose>
          {children}
        <FooterRow>
          <ButtonCLose>
            Закрыть
          </ButtonCLose>
          <ButtonAdd>
            Добавить
          </ButtonAdd>
        </FooterRow>
      </ModalStyled>
    </ModalShading>
  )
}

export default Modal