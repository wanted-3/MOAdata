import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useParams } from 'react-router-dom'
import { useMount } from 'react-use'
import { getHeartRateApi } from 'services/getData'
import { temp, tempData } from 'states/heartRateData'

const UserDetail = () => {
  const dispatch = useAppDispatch()

  useMount(() => {
    getHeartRateApi().then((res) => dispatch(temp(res.data)))
  })

  const heartRateData = useAppSelector(tempData)

  const { userId } = useParams()
  return <div>UserDetail{userId}</div>
}

export default UserDetail
