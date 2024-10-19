import { css } from "styled-components";

export const flexCSS = (props = {}) => css`
    display: flex;
    ${props.direction ? `flex-direction: ${props.direction};` : ''}
    flex-wrap: ${props.wrap ? `${props.wrap};` : 'wrap;'}
    align-items: ${props.align ? `${props.align};` : 'center;'}
    ${props.alignContent ? `align-content: ${props.alignContent};` : ''}
    ${props.justify ? `justify-content: ${props.justify};` : ''}
    ${props.gap ? `gap: ${props.gap};` : ''}
`;

