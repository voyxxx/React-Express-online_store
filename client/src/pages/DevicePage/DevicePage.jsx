import React from 'react';

// import { Context } from 'src/index'
import {
  DevicePageBuyCardStyled,
  DevicePageHeaderStyled,
  DevicePageRateHolderStyled,
  DevicePageStyled,
  DevicePageBuyCardButtonStyled
} from 'src/pages/DevicePage/DevicePageStyled'
import Specifications from 'src/pages/DevicePage/components/Specifications'

const DevicePage = () => {
  // const { device } = useContext(Context)
  let device = {id: 1, name: "Samsung Galaxy S23 Ultra", price: 25000, rating: 5, img: 'https://telemarket24.ru/upload/img/samsung-galaxy-s23-ultra2.png'}


  return (
    <DevicePageStyled>
      <DevicePageHeaderStyled>
        <img
          height='100%'
          src={device.img}
          alt={device.name}
        />
        <DevicePageRateHolderStyled
          data-rate={device.rating}
        >
          {device.name}
        </DevicePageRateHolderStyled>
        <DevicePageBuyCardStyled>
          {device.price+'\u00A0' } р.
          <DevicePageBuyCardButtonStyled>
            Добавить в корзину
          </DevicePageBuyCardButtonStyled>
        </DevicePageBuyCardStyled>
      </DevicePageHeaderStyled>
      <Specifications/>
    </DevicePageStyled>
  );
};

export default DevicePage;