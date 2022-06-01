import { useState, useEffect, MouseEvent, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { getHeartRateApi, getStepRateApi } from 'services/getData'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { resetUserData, getHeartRateData, getStepData, getUserInfo } from 'states/userData'
import { IData } from 'types/userData.d'

import styles from './userTable.module.scss'
import Button from 'components/common/Button'

interface UserTableProps {
  userData: IData[]
  page: number
}

const UserTable = ({ userData, page }: UserTableProps) => {
  const dispatch = useAppDispatch()

  const [offset, setOffset] = useState(0)

  const navigate = useNavigate()

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const numberId = Number(e.currentTarget.value)

    dispatch(resetUserData())

    getHeartRateApi(numberId)?.then((res) => res.map((item) => dispatch(getHeartRateData(item.data))))
    getStepRateApi(numberId)?.then((res) => res.map((item) => dispatch(getStepData(item.data))))
    dispatch(getUserInfo(numberId))

    navigate(e.currentTarget.value)
  }

  const currentPageContents = useMemo(() => {
    return userData.slice(offset, offset + 5)
  }, [offset, userData])

  useEffect(() => {
    setOffset((page - 1) * 5)
  }, [page])

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>회원번호</th>
          <th>가입일</th>
          <th>로그인ID</th>
          <th>상세</th>
        </tr>
      </thead>
      <tbody>
        {currentPageContents.map((item) => (
          <tr key={item.member_seq}>
            <td>{item.member_seq}</td>
            <td>{item.date}</td>
            <td>{item.id}</td>
            <td>
              <Button title='관리' onClick={handleClick} size='small' value={item.member_seq} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
