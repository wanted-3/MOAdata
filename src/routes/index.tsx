import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from 'components/layout'
import Home from './home'
import UserDetail from './users/userDetail'
import Login from './login'
import Users from './users/search'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='users' element={<Users />}>
            <Route path=':userId' element={<UserDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
