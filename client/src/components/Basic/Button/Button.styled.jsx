import styled from "styled-components";

export const Button = styled.button(props => ({
  alignSelf: props.$AlignSelf,
  padding: props.$Padding || '8px 16px',
  width: props.$Width,
  height: props.$Height,
  borderRadius: '4px',
  border:  props.$BorderColor ? `2px solid ${props.$BorderColor}` : props.$Border || 'none',
  backgroundColor: props.$BackgroundColor,
  color: props.$Color,
}))
