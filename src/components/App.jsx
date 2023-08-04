
import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom"
import { Layout } from "./Layout/Layout"
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute"
import { PrivatedRoute } from "./PrivateRoute/PrivateRoute"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { useAuth } from "hooks/userAuth";

import styles from './app.module.scss'

const HomePage = lazy(() => import('./../pages/Home/Home'))
const LoginPage = lazy(() => import('./../pages/Login/Login'))
const RegistredPage = lazy(() => import('./../pages/Register/Register'))
const ContactPage = lazy(() => import('./../pages/Contacts/Contacts'))

export const App = () => {

  const dispatch = useDispatch()
  const {isRefreshing } = useAuth() 

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])


  return isRefreshing ? (<div>Refreshing User...</div>) : (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />}/>
          <Route path='/register' element={
            <RestrictedRoute redirectTo='/contacts' component={<RegistredPage/>}/>
          }
          />
          <Route path='/login' element={
            <RestrictedRoute redirectTo='/contacts' component={<LoginPage/>}/>
          }
          />
          <Route path='/contacts' element={
            <PrivatedRoute redirectTo='/login' component={<ContactPage/>}/>
          }/>
        </Route>
      </Routes>
    </div>
    
  )
}

