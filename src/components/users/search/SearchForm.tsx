import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useEffect, useRef, useState, ChangeEvent, FormEvent } from 'react'
import { getDate, setReset, setUserDate } from 'states/dateData'
import SearchResult from './SearchResult'
import { IData } from 'types/userData.d'
import styles from './searchForm.module.scss'
import Datepicker from 'components/common/Datepicker'
import Button from 'components/common/Button'
import { userID } from 'utils/member'

const userData: IData[] | [] = userID

const SearchForm = () => {
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

  const onReset = () => {
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
    <div className={styles.searchForm}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={onSearchSubmit}>
          <div className={styles.inputs}>
            <label htmlFor='loginIdInput'>로그인ID</label>
            <input id='loginIdInput' ref={inputIDRef} type='text' onChange={handleIdChange} value={loginId} />
            <label htmlFor='memberIdInput'>회원번호</label>
            <input id='memberIdInput' type='text' onChange={handleMemberIdChange} value={memberSeq} />
          </div>
          <button type='submit' className={styles.submitBtn}>
            검색
          </button>
        </form>
        <div className={styles.datePicker}>
          <Datepicker dispatchUserDate={setUserDate} />
        </div>
        <Button title='필터초기화' onClick={onReset} size='big' />
      </div>

      <SearchResult userData={filteredData} />
    </div>
  )
}

export default SearchForm
