import styled from 'styled-components'

import { colors } from 'src/common/styled/constants'

export const Button = styled.button(props => ({
  alignSelf: props.$AlignSelf,
  margin: props.$Margin,
  padding: props.$Padding || '8px 16px',
  width: props.$Width,
  height: props.$Height,
  fontSize: props.$FontSize,
  fontWeight: props.$FontWeight,
  borderRadius: '4px',
  border:  props.$BorderColor ? `2px solid ${props.$BorderColor}` : props.$Border || 'none',
  backgroundColor: props.$BackgroundColor ? `rgb(${props.$BackgroundColor})` : '',
  color: props.$Color,
  '&:hover': {
    backgroundColor: props.$HoverBackgroundColor
      ? `rgb(${props.$HoverBackgroundColor})`
      : props.$BackgroundColor
        ? `rgba(${props.$BackgroundColor}, .7)`
        : `rgba(${colors.buttonDefaultColor}, .7)`,
    color: props.$HoverColor,
    borderColor: props.$HoverBorderColor || props.$BorderColor,
  },
}))
