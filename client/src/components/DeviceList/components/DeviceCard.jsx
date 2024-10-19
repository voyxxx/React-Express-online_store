import React from 'react'
// import { useNavigate } from 'react-router-dom'

import { DEVICE_ROUTE } from 'src/utils/const'
import {
  DeviceCardFirstRowStyled,
  DeviceCardImgStyled, DeviceCardLinkStyled,
  DeviceCardStyled
} from 'src/components/DeviceList/components/DeviceCard.styled'

const DeviceCard = ({device}) => {
  // const history = useNavigate()

  return (
    <DeviceCardStyled>
      <DeviceCardImgStyled src={device.img} alt={device.name}/>
      <DeviceCardFirstRowStyled
        data-rate={device.rating}
      >
        Смартфон samsung76987687678678687968
      </DeviceCardFirstRowStyled>
      <DeviceCardLinkStyled
        href={`${DEVICE_ROUTE}/${device.id}`}
      >
        {device.name}
      </DeviceCardLinkStyled>
    </DeviceCardStyled>
  )
}

export default DeviceCard