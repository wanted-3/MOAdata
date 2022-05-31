import { Outlet, useNavigate, useParams, useLocation } from 'react-router-dom'
import styles from './userNavigate.module.scss'

const UserNavigate = () => {
  const { userId } = useParams()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleUserClick = () => {
    navigate('/users')
  }

  const handleHomeClick = () => {
    navigate('/home')
  }

  return (
    <div className={styles.userNavigate}>
      <div className={styles.titleWrap}>
        <button type='button' onClick={handleHomeClick}>
          <span>홈</span>
        </button>
        {pathname !== '/home' && (
          <>
            <span>{'>'}</span>
            <button type='button' onClick={handleUserClick}>
              <span>회원 관리</span>
            </button>
          </>
        )}
        {userId && (
          <>
            <span>{'>'}</span>
            <span>회원 상세</span>
          </>
        )}
      </div>
      <Outlet />
    </div>
  )
}

export default UserNavigate
