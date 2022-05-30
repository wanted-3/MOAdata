import { useState } from 'react'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useNavigate } from 'react-router-dom'
// import { useAppSelector } from 'hooks/useAppSelector'

import styles from './login.module.scss'
import { CheckIcon } from 'assets/svgs'
import LOGO from 'assets/logo-w.png'
import { accessActions, getAccessState } from 'states/accessUser'

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
  // const userState = useAppSelector(getAccessState)
  const [checkId, setCheckId] = useState(false)
  const [checkPw, setCheckPw] = useState(false)
  const [showTxt, setShowTxt] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const navigate = useNavigate()

  const handleCheckId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget.value

    TEMPORARY.filter((a) => {
      if (a.id === target) {
        setCheckId(true)
      }
      return false
    })
    // if (target === '') {
    //   setShowPopup(false)
    //   setShowTxt(false)
    // }
  }
  const handleCheckPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e)
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
      dispatch(accessActions.setAccessUser(checkId))
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
        <div className={styles.loginForm}>
          <img src={LOGO} alt='모아테이타 로고' />
          <div className={styles.inputWrap}>
            <input type='text' placeholder='아이디 입력' className={styles.idInput} onChange={handleCheckId} />
          </div>
          <div className={styles.inputWrap}>
            <input type='text' placeholder='비밀번호 입력' className={styles.idInput} onChange={handleCheckPw} />
          </div>
          <p className={`${styles.invalid} ${showTxt ? styles.invalidOK : ''}`}>
            일치하는 아이디, 비밀번호가 없습니다.
          </p>
          <button type='button' className={styles.loginBtn} disabled={!checkId} onClick={setAccessUser}>
            로그인 하기
          </button>
        </div>
      </div>
    </div>
  )
}
export default Login
