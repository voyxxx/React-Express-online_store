import React from 'react'

import { colors } from 'src/common/styled/constants'

import BaseLink from 'src/components/Link/Link';

const Link = (props) => {
  return (
    <BaseLink
      {...props}
      css={{
        padding: '8px 16px',
        borderColor: colors.red,
        bgColor: colors.pinkLight,
        fontWeight: 'bold'
      }}
    />
  )
}

export default Link;
