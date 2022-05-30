import SearchForm from 'components/users/search/SearchForm'
import { Outlet } from 'react-router-dom'

const Users = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Users
