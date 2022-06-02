import { useState } from 'react'

import styles from './searchResult.module.scss'
import { IData } from 'types/userData.d'
import UserTable from './UserTable'

interface SearchResultProps {
  userData: IData[]
}

const SearchResult = ({ userData }: SearchResultProps) => {
  const [page, setPage] = useState(1)

  const COUNT_PER_PAGE = 5
  const numOfPeople = userData.length
  const totalPage = Math.ceil(numOfPeople / COUNT_PER_PAGE)

  const handleNextPage = () => {
    setPage((prev) => prev + 1)
  }

  const handlePrevPage = () => {
    setPage((prev) => prev - 1)
  }

  return (
    <div className={styles.searchResult}>
      <p>
        전체 총 <mark>{numOfPeople}</mark> 명의 회원이 검색되었습니다.
      </p>

      <UserTable userData={userData} page={page} countPerPage={COUNT_PER_PAGE} />

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
