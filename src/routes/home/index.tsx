import { useNavigate } from 'react-router-dom'
import { useMount } from 'react-use'

import { useAppSelector } from 'hooks/useAppSelector'
import { getAccessState } from 'states/accessUser'

const Home = () => {
  const userState = useAppSelector(getAccessState)
  const navigate = useNavigate()

  useMount(() => {
    if (userState) return

    navigate('/')
  })

  return <div>home</div>
}

export default Home
