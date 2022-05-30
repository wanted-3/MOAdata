import DatePicker from 'react-datepicker'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

import 'react-datepicker/dist/react-datepicker.css'
import styles from './datepicker.module.scss'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useAppSelector } from 'hooks/useAppSelector'
import { getReset, setReset } from 'states/dateData'
import { END_DATE, formatedDate, MIN_DATE, START_DATE, TODAY, WEEK } from 'utils/date'

interface TempProps {
  dispatchUserDate: ActionCreatorWithPayload<any, string>
}

const Datepicker = ({ dispatchUserDate }: TempProps) => {
  const dispatch = useAppDispatch()
  const tmp = useAppSelector(getReset)
  const [startDate, setStartDate] = useState(START_DATE)
  const [endDate, setEndDate] = useState(END_DATE)

  useEffect(() => {
    if (tmp) {
      setStartDate(START_DATE)
      setEndDate(END_DATE)
      dispatch(setReset(false))
    }
  }, [dispatch, tmp])

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
