import { Outlet, useNavigate, useParams } from 'react-router-dom'

const UserNavigate = () => {
  const { userId } = useParams()

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/users')
  }

  return (
    <div>
      <div>홈</div>
      <button type='button' onClick={handleClick}>
        회원 관리
      </button>
      {userId && <div>회원 상세</div>}
      <Outlet />
    </div>
  )
}

export default UserNavigate
