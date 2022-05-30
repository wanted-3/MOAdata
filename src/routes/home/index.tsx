import { useState, useEffect } from 'react'
import { useMount } from 'react-use'
import styles from './home.module.scss'
import { Link } from 'react-router-dom'

interface IData {
  id: string
  date: string
  member_seq: number
}

const Home = () => {
  const tempData: IData[] | [] = [
    {
      id: 'asdf',
      date: '22-05-28 12:12:12',
      member_seq: 136,
    },
    {
      id: 'zxcv',
      date: '22-05-30 10:24:45',
      member_seq: 328,
    },
    {
      id: 'qwer',
      date: '22-04-01 13:13:13',
      member_seq: 380,
    },
    {
      id: 'asdf',
      date: '22-05-28 12:12:12',
      member_seq: 1336,
    },
    {
      id: 'zxcv',
      date: '22-05-30 10:24:45',
      member_seq: 3328,
    },
    {
      id: 'qwer',
      date: '22-04-01 13:13:13',
      member_seq: 3480,
    },
    {
      id: 'asdf',
      date: '22-05-28 12:12:12',
      member_seq: 1356,
    },
    {
      id: 'zxcv',
      date: '22-05-30 10:24:45',
      member_seq: 3268,
    },
    {
      id: 'qwer',
      date: '22-04-01 13:13:13',
      member_seq: 3890,
    },
    {
      id: 'asdf',
      date: '22-05-28 12:12:12',
      member_seq: 13336,
    },
    {
      id: 'zxcv',
      date: '22-05-30 10:24:45',
      member_seq: 3218,
    },
    {
      id: 'qwer',
      date: '22-04-01 13:13:13',
      member_seq: 33380,
    },
    {
      id: 'asdf',
      date: '22-05-28 12:12:12',
      member_seq: 135556,
    },
    {
      id: 'zxcv',
      date: '22-05-30 10:24:45',
      member_seq: 35528,
    },
    {
      id: 'qwer',
      date: '22-04-01 13:13:13',
      member_seq: 385550,
    },
    {
      id: 'asdf',
      date: '22-05-28 12:12:12',
      member_seq: 155536,
    },
    {
      id: 'zxcv',
      date: '22-05-30 10:24:45',
      member_seq: 344428,
    },
    {
      id: 'qwer',
      date: '22-04-01 13:13:13',
      member_seq: 3780,
    },
  ]

  const [currData, setCurrData] = useState<IData[]>([])
  const [page, setPage] = useState(1)
  const [offset, setOffset] = useState(0)

  const numOfPeople = tempData.length
  const totalPage = Math.ceil(numOfPeople / 10)

  const handleNextPage = () => {
    setPage((prev) => prev + 1)
  }
  const handlePrevPage = () => {
    setPage((prev) => prev - 1)
  }

  useMount(() => {
    setCurrData(tempData)
  })

  useEffect(() => {
    setOffset((page - 1) * 10)
  }, [page])

  return (
    <div className={styles.searchResult}>
      <p>
        전체 총 <mark>{numOfPeople}</mark> 명의 회원이 검색되었습니다.
      </p>
      <table className={styles.table}>
        <th>회원번호</th>
        <th>가입일</th>
        <th>로그인ID</th>
        <th>상세</th>
        {currData.slice(offset, offset + 10).map((v) => {
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

export default Home
