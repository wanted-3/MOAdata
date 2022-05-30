import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useEffect, useRef, useState, ChangeEvent, FormEvent, MouseEvent } from 'react'
import { getDate, setReset } from 'states/dateData'
import SearchResult from './SearchResult'
import { IData } from 'types/userData.d'
import styles from './searchForm.module.scss'

const userData: IData[] | [] = [
  {
    id: 'asdf',
    date: '2022-05-28 12:12:12',
    member_seq: 136,
  },
  {
    id: 'zxcv',
    date: '2022-05-30 10:24:45',
    member_seq: 328,
  },
  {
    id: 'qwer',
    date: '2022-04-01 13:13:13',
    member_seq: 380,
  },
]

const Search = () => {
  const inputIDRef = useRef<HTMLInputElement>(null)
  const [loginId, setLoginId] = useState('')
  const [memberSeq, setMemberSeq] = useState('')
  const [filteredData, setFilteredData] = useState(userData)
  const date = useAppSelector(getDate)
  const dispatch = useAppDispatch()

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.currentTarget.value)
  }

  const handleMemberIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMemberSeq(e.currentTarget.value)
  }

  const onSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let temp = [...userData]
    if (loginId !== '') {
      temp = temp.filter((item) => item.id === loginId)
    }

    if (memberSeq !== '') {
      temp = temp.filter((item) => item.member_seq === Number(memberSeq))
    }

    temp = temp.filter(
      (item) =>
        Date.parse(date.userDate.startDate) <= Date.parse(item.date.slice(0, 10)) &&
        Date.parse(date.userDate.endDate) >= Date.parse(item.date.slice(0, 10))
    )

    setFilteredData(temp)
  }

  const onReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoginId('')
    setMemberSeq('')
    dispatch(setReset(true))
    setFilteredData(userData)
  }

  useEffect(() => {
    inputIDRef.current?.focus()
  }, [])
  // useEffect(() => {
  //   if (onSearchSubmit) {
  //     setLoginId('')
  //     setMemberSeq('')
  //   }
  // }, [onSearchSubmit])
  return (
    <div>
      <form className={styles.userFormContainer} onSubmit={onSearchSubmit}>
        <input ref={inputIDRef} type='text' onChange={handleIdChange} value={loginId} placeholder='로그인아이디' />
        <input type='text' onChange={handleMemberIdChange} value={memberSeq} placeholder='회원번호' />

        <button type='submit'>검색</button>
      </form>
      <button type='button' onClick={onReset}>
        필터초기화
      </button>
      <SearchResult userData={filteredData} />
    </div>
  )
}

export default Search
