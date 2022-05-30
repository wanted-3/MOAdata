import { useState, useEffect } from 'react'
import styles from './searchResult.module.scss'
import { Link } from 'react-router-dom'
import { IData } from 'types/userData.d'

interface Props {
  userData: IData[]
}

const SearchResult = ({ userData }: Props) => {
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0)

  const numOfPeople = userData.length
  const totalPage = Math.ceil(numOfPeople / 10)

  const handleNextPage = () => {
    setPage((prev) => prev + 1)
  }
  const handlePrevPage = () => {
    setPage((prev) => prev - 1)
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
                  <button type='button'>
                    <Link to={`users/${memberSeq}`}>관리</Link>
                  </button>
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
