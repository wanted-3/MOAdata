import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useMount } from 'react-use'

const Users = () => {
  const { userId } = useParams()

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/users')
  }

  useMount(() => {
    navigate('/users')
  })

  return (
    <div>
      <div>홈</div>
      <button type='button' onClick={handleNavigate}>
        회원 관리
      </button>
      {userId && <div>회원 상세</div>}
      <Outlet />
    </div>
  )
}

export default Users
