import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Navigate, Route, Routes } from 'react-router-dom'

import { authRoutes, publicRoutes } from "../routes";
import { Context } from "../index";

const AppRouter = observer(() => {
  const { user } = useContext(Context)

  return (
    <Routes>
      {user.isAuth && authRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact/>
      ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact/>
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
})

export default AppRouter;