import { useRef, useState, ChangeEvent, FormEvent } from 'react'
import Datepicker from 'components/common/Datepicker'
import { useMount } from 'react-use'

import { getDate, setReset, setUserDate } from 'states/dateData'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { userID } from 'utils/member'

import Button from 'components/common/Button'
import styles from './searchForm.module.scss'
import SearchResult from './SearchResult'

const USER_DATA = userID

const SearchForm = () => {
  const date = useAppSelector(getDate)
  const dispatch = useAppDispatch()

  const [filteredUserData, setFilteredUserData] = useState(USER_DATA)
  const [memberSeq, setMemberSeq] = useState('')
  const [loginId, setLoginId] = useState('')

  const inputIDRef = useRef<HTMLInputElement>(null)

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.currentTarget.value)
  }

  const handleMemberIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMemberSeq(e.currentTarget.value)
  }

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let filterUserList = USER_DATA
    if (loginId !== '') {
      filterUserList = filterUserList.filter((item) => item.id === loginId)
    }

    if (memberSeq !== '') {
      filterUserList = filterUserList.filter((item) => item.member_seq === Number(memberSeq))
    }

    filterUserList = filterUserList.filter(
      (item) =>
        Date.parse(date.userDate.startDate) <= Date.parse(item.date.slice(0, 10)) &&
        Date.parse(date.userDate.endDate) >= Date.parse(item.date.slice(0, 10))
    )

    setFilteredUserData(filterUserList)
  }

  const onReset = () => {
    setLoginId('')
    setMemberSeq('')
    dispatch(setReset(true))
    setFilteredUserData(USER_DATA)
  }

  useMount(() => {
    inputIDRef.current?.focus()
  })

  return (
    <div className={styles.searchForm}>
      <h1 className={styles.title}>회원 관리</h1>
      <div className={styles.dataInputWrap}>
        <div className={styles.formWrapper}>
          <form className={styles.form} onSubmit={handleSearchSubmit}>
            <label htmlFor='loginIdInput'>로그인ID</label>
            <input id='loginIdInput' ref={inputIDRef} type='text' onChange={handleIdChange} value={loginId} />

            <label htmlFor='memberIdInput'>회원번호</label>
            <input id='memberIdInput' type='text' onChange={handleMemberIdChange} value={memberSeq} />
            <button type='submit' className={styles.submitBtn}>
              검색
            </button>
          </form>
          <div className={styles.datePickerWrap}>
            <Datepicker dispatchUserDate={setUserDate} />
          </div>
        </div>
        <Button title='필터초기화' onClick={onReset} size='small' />
      </div>
      <SearchResult userData={filteredUserData} />
    </div>
  )
}

export default SearchForm
