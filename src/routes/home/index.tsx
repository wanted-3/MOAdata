import { useNavigate } from 'react-router-dom'
import { useMount } from 'react-use'

import { useAppSelector } from 'hooks/useAppSelector'
import { getAccessState } from 'states/accessUser'
import UserNavigate from 'routes/users/UserNavigate'

import styles from './home.module.scss'

const Home = () => {
  const userState = useAppSelector(getAccessState)
  const navigate = useNavigate()

  useMount(() => {
    if (userState) return

    navigate('/')
  })

  return (
    <div>
      <UserNavigate />
      <h1 className={styles.title}>홈</h1>
    </div>
  )
}

export default Home
