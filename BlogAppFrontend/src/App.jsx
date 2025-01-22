import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Addblogs from './components/Addblogs'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Main from './components/Main'
import PrivateRoutes from './components/PrivateRoutes'


const App = () => {
  return (
    <div>
    {/* <Home /> */}
    <Routes>
      <Route path='/' element={ <Login />} ></Route>
      <Route path='/signup' element={ <Signup />} ></Route>
      <Route element={<PrivateRoutes/>}>
      <Route path='/blogs' element={ <Main child={<Home />} />} ></Route>
      <Route path='/addblogs' element={ <Main child={<Addblogs />} />} ></Route>
      </Route>
    </Routes>
    </div>
  )
}

export default App
