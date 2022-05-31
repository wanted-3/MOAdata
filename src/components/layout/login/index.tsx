import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { setAccessUserTF, setLoginID } from 'states/accessUser'

import styles from './login.module.scss'
import { cx } from 'styles'
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

  const handleinvalid = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = e.currentTarget.value
    const targetName = e.currentTarget.name
    setShowPopup(false)
    setShowTxt(false)
    if (targetName === 'id') {
      setLogin(targetValue)
      TEMPORARY.map((item) => item.id === targetValue && setCheckId(true))
    } else if (targetName === 'pw') {
      TEMPORARY.map((item) => item.pw === targetValue && setCheckPw(true))
    }
  }

  const handleSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (checkId && checkPw) {
      dispatch(setAccessUserTF(checkId))
      dispatch(setLoginID(login))
      navigate('/home')
    } else {
      setShowPopup(true)
      setShowTxt(true)
    }
  }

  const handlePopup = () => {
    setShowPopup(false)
  }

  return (
    <div className={styles.loginWrap}>
      <div className={cx(styles.popup, { [styles.popupOK]: showPopup })}>
        일치하는 아이디, 비밀번호가 없습니다
        <button type='button' onClick={handlePopup}>
          X
        </button>
      </div>

      <div className={styles.formWrap}>
        <form className={styles.loginForm} onSubmit={handleSubmitLogin}>
          <img src={LOGO} alt='모아테이타 로고' />
          <div className={styles.inputWrap}>
            <div className={styles.inputBox}>
              <input
                type='text'
                placeholder='아이디 입력'
                className={styles.idInput}
                name='id'
                onChange={handleinvalid}
              />
            </div>
            <div className={styles.inputBox}>
              <input
                type='password'
                placeholder='비밀번호 입력'
                className={styles.pwInput}
                name='pw'
                onChange={handleinvalid}
              />
            </div>
            <p className={cx(styles.invalid, { [styles.invalidOK]: showTxt })}>일치하는 아이디, 비밀번호가 없습니다.</p>
          </div>
          <button type='submit' className={styles.loginBtn}>
            로그인 하기
          </button>
        </form>
      </div>
    </div>
  )
}
export default Login
