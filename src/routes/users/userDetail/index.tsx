import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useParams } from 'react-router-dom'
import { useMount } from 'react-use'
import { getHeartRateApi } from 'services/getData'

const UserDetail = () => {
  const dispatch = useAppDispatch()

  const { userId } = useParams()
  return <div>UserDetail{userId}</div>
}

export default UserDetail
