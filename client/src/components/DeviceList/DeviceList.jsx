import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'

import { Context } from 'src/index'
import { DeviceListStyled } from 'src/components/DeviceList/DeviceListStyled'
import DeviceCard from 'src/components/DeviceList/components/DeviceCard'

const DeviceList = observer(() => {
  const { device } = useContext(Context)

  return (
    <DeviceListStyled>
      {device.devices.map(item => (
        <DeviceCard
          key={item.id}
          device={item}
        />
      ))}
    </DeviceListStyled>
  )
})

export default DeviceList