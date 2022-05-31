import { Outlet, useNavigate, useParams } from 'react-router-dom'
import { useMount } from 'react-use'
import styles from './users.module.scss'

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
      <div className={styles.navigateWrap}>
        <div className={styles.content}>홈 &gt;</div>
        <button type='button' onClick={handleNavigate}>
          회원 관리 &gt;
        </button>
        {userId && <div className={styles.content}> 회원 상세</div>}
      </div>
      <Outlet />
    </div>
  )
}

export default Users
