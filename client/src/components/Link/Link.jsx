import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from 'styled-components';
import { colors } from "src/common/styled/constants";

const StyledLink = styled(({ css, ...props }) => <RouterLink {...props} />)`
  text-decoration: none;
  padding: ${({css}) => css?.padding || ''};
  border-radius: 8px;
  box-shadow: ${({css}) => css?.boxShadow || ''};
  color: ${({css}) => css?.color || `rgb(${colors.black})`};
  background-color: ${({css}) => css?.bgColor ? `rgb(${css?.bgColor})` : `inherit`};
  border: ${({css}) => css?.borderColor ? `1px solid rgb(${css?.borderColor})` : 'none'};
  font-weight: ${({css}) => css?.fontWeight ? css.fontWeight : ''};
  transition: all .4s;

  &:hover {
    filter: hue-rotate(25deg) contrast(1.1);
  }
`

const Link = (props) => {
  console.log(props)
  return (
    <StyledLink {...props} />
  )
}

export default Link;
