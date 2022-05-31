import { Outlet, useNavigate, useParams } from 'react-router-dom'
import styles from './userNavigate.module.scss'

const UserNavigate = () => {
  const { userId } = useParams()

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/users')
  }

  return (
    <div className={styles.userNavigate}>
      <div className={styles.titleWrap}>
        <h1>홈</h1>
        <button type='button' onClick={handleClick}>
          회원 관리
        </button>
        {userId && <div>회원 상세</div>}
      </div>
      <Outlet />
    </div>
  )
}

export default UserNavigate
