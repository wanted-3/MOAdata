import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { getLoginID, setLoginState } from 'states/accessUser'
import { useAppDispatch } from 'hooks/useAppDispatch'

import Button from 'components/common/Button'
import styles from './header.module.scss'

const Header = () => {
  const dispatch = useAppDispatch()
  const loginID = useSelector(getLoginID)

  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(setLoginState(false))
    navigate('/')
  }

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>백 오피스</h2>
      <div className={styles.userWrap}>
        <h3>{loginID}</h3>
        <Button title='로그아웃' onClick={handleLogout} size='big' />
      </div>
    </header>
  )
}

export default Header
