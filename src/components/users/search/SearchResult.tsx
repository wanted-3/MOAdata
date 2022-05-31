import { useState, useEffect, MouseEvent } from 'react'
import styles from './searchResult.module.scss'
import { useNavigate } from 'react-router-dom'
import { IData } from 'types/userData.d'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { getHeartRateApi, getStepRateApi } from 'services/getData'
import { resetUserData, getHeartRateData, getStepData, userInfoTemp } from 'states/userData'
import Button from 'components/common/Button'

interface Props {
  userData: IData[]
}

const SearchResult = ({ userData }: Props) => {
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0)
  const dispatch = useAppDispatch()

  const numOfPeople = userData.length
  const totalPage = Math.ceil(numOfPeople / 10)

  const navigate = useNavigate()

  const handleNextPage = () => {
    setPage((prev) => prev + 1)
  }
  const handlePrevPage = () => {
    setPage((prev) => prev - 1)
  }
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const numberId = Number(e.currentTarget.value)

    dispatch(resetUserData())

    getHeartRateApi(numberId)?.then((res) => res.map((item) => dispatch(getHeartRateData(item.data))))
    getStepRateApi(numberId)?.then((res) => res.map((item) => dispatch(getStepData(item.data))))
    dispatch(userInfoTemp(numberId))

    navigate(`${numberId}`)
  }

  useEffect(() => {
    setOffset((page - 1) * 10)
  }, [page])

  return (
    <div className={styles.searchResult}>
      <p>
        전체 총 <mark>{numOfPeople}</mark> 명의 회원이 검색되었습니다.
      </p>
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
          {userData.slice(offset, offset + 10).map((v) => {
            const { id, date, member_seq: memberSeq } = v
            return (
              <tr key={memberSeq}>
                <td>{memberSeq}</td>
                <td>{date}</td>
                <td>{id}</td>
                <td>
                  <Button title='관리' onClick={handleClick} size='small' value={memberSeq} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <button className={styles.paginationBtn} type='button' onClick={handlePrevPage} disabled={page === 1}>
          &lt;
        </button>
        <span>{page}</span>
        <button className={styles.paginationBtn} type='button' onClick={handleNextPage} disabled={page === totalPage}>
          &gt;
        </button>
      </div>
    </div>
  )
}

export default SearchResult
