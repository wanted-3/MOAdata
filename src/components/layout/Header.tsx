// import { useAppSelector } from 'hooks/useAppSelector'
// import { getAccessState } from 'states/accessUser'
import { useNavigate } from 'react-router-dom'
// import { useMount } from 'react-use'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { accessActions } from 'states/accessUser'
import styles from './header.module.scss'

const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(accessActions.setAccessUser(false))
    navigate('/')
  }
  return (
    <header className={styles.header}>
      <div className={styles.headerWrap}>
        <h2 className={styles.title}>백 오피스</h2>
        <div className={styles.userWrap}>
          <h3>내 아이디</h3>
          <button type='button' onClick={handleLogout}>
            로그아웃
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
