import { useState } from 'react'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useNavigate } from 'react-router-dom'
// import { useAppSelector } from 'hooks/useAppSelector'

import styles from './login.module.scss'
import { CheckIcon } from 'assets/svgs'
import LOGO from 'assets/logo-w.png'
import { accessActions, getAccessState } from 'states/accessUser'

const TEMPORARY = {
  id: 'qwe123',
}
const Login = () => {
  const dispatch = useAppDispatch()
  // const userState = useAppSelector(getAccessState)
  const [checkId, setCheckId] = useState(false)
  const [showTxt, setShowTxt] = useState(false)

  const navigate = useNavigate()

  const handleCheckId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value
    setShowTxt(true)
    setCheckId(false)
    if (TEMPORARY.id === target) {
      setShowTxt(false)
      setCheckId(true)
    } else if (target === '') {
      setShowTxt(false)
    }
  }

  const setAccessUser = () => {
    dispatch(accessActions.setAccessUser(checkId))
    navigate('/home')
  }

  return (
    <div className={styles.loginWrap}>
      <div className={styles.popup}>일치하는 아이디가 없습니다</div>
      <div className={styles.formWrap}>
        <div className={styles.loginForm}>
          <img src={LOGO} alt='모아테이타 로고' />
          <div className={styles.inputWrap}>
            <input type='text' placeholder='아이디 입력' className={styles.idInput} onChange={handleCheckId} />
            <CheckIcon className={`${styles.checkIcon} ${checkId ? styles.checkIconOK : ''}`} />
            <p className={`${styles.invalid} ${showTxt ? styles.invalidOK : ''}`}>일치하는 아이디가 없습니다.</p>
          </div>
          <button type='button' className={styles.loginBtn} disabled={!checkId} onClick={setAccessUser}>
            로그인 하기
          </button>
        </div>
      </div>
    </div>
  )
}
export default Login
