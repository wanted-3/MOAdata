import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { getLoginID, setAccessUserTF } from 'states/accessUser'
import styles from './header.module.scss'
import { useSelector } from 'react-redux'
import Button from 'components/common/Button'

const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const id = useSelector(getLoginID)
  const handleLogout = () => {
    dispatch(setAccessUserTF(false))
    navigate('/')
  }
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>백 오피스</h2>
      <div className={styles.userWrap}>
        <h3>{id}</h3>
        <Button title='로그아웃' onClick={handleLogout} />
      </div>
    </header>
  )
}

export default Header
