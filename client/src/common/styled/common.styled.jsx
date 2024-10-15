import { css } from "styled-components";

export const flexCSS = (props = {}) => css`
    display: flex;
    align-items: ${props.align ? `${props.align};` : 'center;'}
    ${props.direction ? `flex-direction: ${props.direction};` : ''}
    ${props.justify ? `justify-content: ${props.justify};` : ''}
    ${props.gap ? `gap: ${props.gap};` : ''}
`;

