import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useMount } from 'react-use'
import styles from './userNavigate.module.scss'

const UserNavigate = () => {
  const { userId } = useParams()

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/users')
  }

  useMount(() => {
    navigate('/users')
  })

  return (
    <div className={styles.userNavigate}>
      <div className={styles.titleWrap}>
        <span>홈</span>
        <span>{'>'}</span>
        <button type='button' onClick={handleClick}>
          <span>회원 관리</span>
        </button>
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
