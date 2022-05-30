import DatePicker from 'react-datepicker'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import 'react-datepicker/dist/react-datepicker.css'
import styles from './datepicker.module.scss'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'

interface TempProps {
  dispatchUserDate: ActionCreatorWithPayload<any, string>
}
const MIN_DATE = new Date('2022-01-01')
const TODAY = new Date()
const WEEK = dayjs(TODAY).subtract(6, 'day').toDate()

const formatedDate = (date: Date) => {
  return dayjs(date).format('YYYY-MM-DD')
}

const Datepicker = ({ dispatchUserDate }: TempProps) => {
  const dispatch = useAppDispatch()
  const [startDate, setStartDate] = useState({ date: MIN_DATE, state: '전체' })
  const [endDate, setEndDate] = useState({ date: TODAY, state: '전체' })

  const handleStartDate = (date: Date) => {
    setStartDate({ date, state: formatedDate(date) })
  }

  const handleEndDate = (date: Date) => {
    setEndDate({ date, state: formatedDate(date) })
  }

  const handleToday = () => {
    setStartDate({ date: TODAY, state: formatedDate(TODAY) })
    setEndDate({ date: TODAY, state: formatedDate(TODAY) })
  }

  const handleWeek = () => {
    setStartDate({ date: WEEK, state: formatedDate(WEEK) })
    setEndDate({ date: TODAY, state: formatedDate(TODAY) })
  }

  const handleTotal = () => {
    setStartDate({ date: MIN_DATE, state: '전체' })
    setEndDate({ date: TODAY, state: '전체' })
  }

  useEffect(() => {
    if (dayjs(startDate.date).isAfter(endDate.date)) return

    dispatch(dispatchUserDate({ startDate: formatedDate(startDate.date), endDate: formatedDate(endDate.date) }))
  }, [dispatch, endDate, startDate, dispatchUserDate])

  return (
    <div className={styles.wrap}>
      <p className={styles.title}>조회기간</p>
      <div className={styles.dateInputs}>
        <DatePicker
          className={styles.dateInput}
          selected={startDate.date}
          onChange={handleStartDate}
          startDate={startDate.date}
          minDate={MIN_DATE}
          maxDate={TODAY}
          dateFormat={startDate.state}
          selectsStart
        />
        <span>~</span>
        <DatePicker
          className={styles.dateInput}
          selected={endDate.date}
          onChange={handleEndDate}
          endDate={endDate.date}
          minDate={MIN_DATE}
          maxDate={TODAY}
          dateFormat={endDate.state}
          selectsEnd
        />
      </div>
      <div className={styles.buttons}>
        <button type='button' className={styles.btn} onClick={handleToday}>
          오늘
        </button>
        <button type='button' className={styles.btn} onClick={handleWeek}>
          1주일
        </button>
        <button type='button' className={styles.btn} onClick={handleTotal}>
          전체
        </button>
      </div>
    </div>
  )
}

export default Datepicker
