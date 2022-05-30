import { useAppSelector } from 'hooks/useAppSelector'
import { getAccessState } from 'states/accessUser'
import { useNavigate } from 'react-router-dom'
import { useMount } from 'react-use'

const Home = () => {
  const userState = useAppSelector(getAccessState)
  const navigate = useNavigate()
  useMount(() => {
    if (!userState) {
      navigate('/')
    }
  })
  return <div>home</div>
}

export default Home
