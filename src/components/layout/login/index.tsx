import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { setAccessUserTF, setLoginID } from 'states/accessUser'

import styles from './login.module.scss'
import LOGO from 'assets/logo-w.png'

const TEMPORARY = [
  {
    id: 'qwe123',
    pw: 'qwe123',
  },
  {
    id: 'asd123',
    pw: 'asd23',
  },
  {
    id: 'zxc123',
    pw: 'zxc123',
  },
]

const Login = () => {
  const dispatch = useAppDispatch()
  const [checkId, setCheckId] = useState(false)
  const [checkPw, setCheckPw] = useState(false)
  const [showTxt, setShowTxt] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [login, setLogin] = useState('')

  const navigate = useNavigate()

  const handleCheckId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value
    setShowPopup(false)
    setShowTxt(false)
    TEMPORARY.filter((a) => {
      if (a.id === target) {
        setCheckId(true)
        setLogin(target)
      }
      return false
    })
  }
  const handleCheckPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value

    TEMPORARY.filter((a) => {
      if (a.pw === target) {
        setCheckPw(true)
      }
      return false
    })
  }

  const setAccessUser = () => {
    if (checkId === true && checkPw === true) {
      dispatch(setAccessUserTF(checkId))
      dispatch(setLoginID(login))
      navigate('/home')
    }
    if (!checkId || !checkPw) {
      setShowPopup(true)
      setShowTxt(true)
    }
  }

  const handlePopup = () => {
    setShowPopup(false)
  }
  return (
    <div className={styles.loginWrap}>
      <div className={`${styles.popup} ${showPopup ? styles.popupOK : ''}`}>
        일치하는 아이디, 비밀번호가 없습니다
        <button type='button' onClick={handlePopup}>
          X
        </button>
      </div>
      <div className={styles.formWrap}>
        <form className={styles.loginForm}>
          <img src={LOGO} alt='모아테이타 로고' />
          <div className={styles.inputWrap}>
            <div className={styles.inputBox}>
              <input type='text' placeholder='아이디 입력' className={styles.idInput} onChange={handleCheckId} />
            </div>
            <div className={styles.inputBox}>
              <input type='password' placeholder='비밀번호 입력' className={styles.pwInput} onChange={handleCheckPw} />
            </div>
            <p className={`${styles.invalid} ${showTxt ? styles.invalidOK : ''}`}>
              일치하는 아이디, 비밀번호가 없습니다.
            </p>
          </div>
          <button type='button' className={styles.loginBtn} disabled={!checkId} onClick={setAccessUser}>
            로그인 하기
          </button>
        </form>
      </div>
    </div>
  )
}
export default Login
