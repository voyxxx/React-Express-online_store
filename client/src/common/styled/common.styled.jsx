import { css } from "styled-components";

export const flexCSS = (props) => css`
  && {
    display: flex; 
    flex-direction: ${props.direction || 'row'};
    align-items: ${props.align || 'center'};
    justify-content: ${props.justify || 'space-between'};
    gap: ${props.gap || '0'};
  }
`

