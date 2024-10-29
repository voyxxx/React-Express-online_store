import React, { useState } from 'react'

import { AdminButton, AdminHolder } from './Admin.styled'
import CreateBrand from 'src/components/modals/CreateBrand'
import CreateDevice from 'src/components/modals/CreateDevice'
import CreateType from 'src/components/modals/CreateType'

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)

  return (
    <AdminHolder>
      <AdminButton
        onClick={() => setTypeVisible(true)}
      >
        Добавить новый тип
      </AdminButton>
      <AdminButton
        onClick={() => setBrandVisible(true)}
      >
        Добавить новый бренд
      </AdminButton>
      <AdminButton
        onClick={() => setDeviceVisible(true)}
      >
        Добавить новый девайс
      </AdminButton>
      <CreateBrand show={brandVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </AdminHolder>
  );
};

export default Admin;