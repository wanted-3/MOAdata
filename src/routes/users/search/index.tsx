import Datepicker from 'components/common/Datepicker'
import Search from 'components/users/search/SearchForm'
import { setUserDate } from 'states/dateData'

const Users = () => {
  return (
    <div>
      <Datepicker dispatchUserDate={setUserDate} />
      <Search />
    </div>
  )
}

export default Users
