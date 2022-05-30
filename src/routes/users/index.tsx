import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './user.module.scss'

const userData = [
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
]

const Users = () => {
  const inputIDRef = useRef<HTMLInputElement>(null)
  const [loginId, setLoginId] = useState('')
  const [memberSeq, setMemberSeq] = useState('')
  const [filteredData, setFilteredData] = useState(userData)

  const Filter = () => {
    if (loginId) {
      const Index = filteredData.findIndex((obj) => obj.id === loginId)
      if (Index !== -1) {
        setFilteredData([filteredData[Index]])
      } else {
        console.log('error loginId')
        setFilteredData([])
      }
    }
    if (memberSeq) {
      const Index = filteredData.findIndex((obj) => obj.member_seq === Number(memberSeq))
      if (Index !== -1) {
        setFilteredData([filteredData[Index]])
      } else {
        console.log('error memberSeq')
        setFilteredData([])
      }
    }
    if (!memberSeq && !loginId) {
      alert('올바른 검색어를 입력해주세요')
    }
  }
  console.log(filteredData)
  const HandleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginId(e.target.value)
  }
  const HandleMemberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberSeq(e.target.value)
  }
  const OnSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    Filter()
    setLoginId('')
    setMemberSeq('')
  }
  const OnReset: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setLoginId('')
    setMemberSeq('')
    setFilteredData(userData)
  }
  useEffect(() => {
    inputIDRef.current?.focus()
  }, [])

  return (
    <div>
      <form className={styles.userFormContainer} onSubmit={OnSearchSubmit}>
        <input ref={inputIDRef} type='text' onChange={HandleIdChange} value={loginId} placeholder='로그인아이디' />
        <input type='text' onChange={HandleMemberChange} value={memberSeq} placeholder='회원번호' />
        <button type='submit' onClick={OnReset}>
          필터초기화
        </button>
        <button type='submit'>검색</button>
      </form>
      <Outlet />
    </div>
  )
}

export default Users
