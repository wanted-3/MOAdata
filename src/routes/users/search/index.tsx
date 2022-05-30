import Search from 'components/users/search/SearchForm'
import { Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <div>
      <Search />
      <Outlet />
    </div>
  )
}

export default Users
