import Datepicker from 'components/common/Datepicker'
import Search from 'components/users/search/SearchForm'
import { Outlet } from 'react-router-dom'
import { setUserDate } from 'states/dateData'

const Users = () => {
  return (
    <div>
      <Datepicker dispatchUserDate={setUserDate} />
      <Search />
      <Outlet />
    </div>
  )
}

export default Users
