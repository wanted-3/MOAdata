import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from 'components/layout'
import Home from './home'
import UserDetail from './users/userDetail'
import Login from './login'
import Search from './users/search'
import UserNavigate from './users/UserNavigate'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path='users' element={<UserNavigate />}>
            <Route path='' element={<Search />} />
            <Route path=':userId' element={<UserDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
