import { css } from 'styled-components'
import { colors, sizes } from 'src/common/styled/constants'

export const flexCSS = (props = {}) => css`
    display: flex;
    ${props.direction ? `flex-direction: ${props.direction};` : ''}
    flex-wrap: ${props.wrap ? `${props.wrap};` : 'wrap;'}
    align-items: ${props.align ? `${props.align};` : 'center;'}
    ${props.alignContent ? `align-content: ${props.alignContent};` : ''}
    ${props.justify ? `justify-content: ${props.justify};` : ''}
    ${props.gap ? `gap: ${props.gap};` : ''}
`

export const defaultMain = (props = {}) => css`
    min-height: calc(100dvh - ${sizes.headerHeight});
    background-color: rgba(${colors.yellow}, .1);
`
