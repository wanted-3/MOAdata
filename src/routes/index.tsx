import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from 'components/layout'
import Home from './home'
import Users from './users'
import UserDetail from './users/userDetail'
import Login from './login'

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

// 키 값 및 리스트 형태
// [
// 	{
// 		"seq" : 278293,
// 		"member_seq" : 380,
// 		"steps" : 4192,
// 		"minutes" : 56,
// 		"distance" : 2.9237268000,
// 		"calorie" : 138.1705600000,
// 		"crt_ymdt" : "2022-04-19 17:51:29"
// 	},
// 	{
// 		"seq" : 278291,
// 		"member_seq" : 380,
// 		"steps" : 4126,
// 		"minutes" : 55,
// 		"distance" : 2.8776950000,
// 		"calorie" : 135.9951600000,
// 		"crt_ymdt" : "2022-04-19 17:41:29"
// 	},
// ]
