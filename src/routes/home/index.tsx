import { useNavigate } from 'react-router-dom'
import { useMount } from 'react-use'

import { useAppSelector } from 'hooks/useAppSelector'
import { getAccessState } from 'states/accessUser'
import UserNavigate from 'routes/users/UserNavigate'

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
    </div>
  )
}

export default Home
