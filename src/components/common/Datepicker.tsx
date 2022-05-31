import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import dayjs from 'dayjs'

import { END_DATE, formatedDate, MIN_DATE, START_DATE, TODAY, WEEK } from 'utils/date'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { getReset, setReset } from 'states/dateData'

import styles from './datepicker.module.scss'
import Button from './Button'

interface DatePickerProps {
  dispatchUserDate: ActionCreatorWithPayload<any, string>
}

const Datepicker = ({ dispatchUserDate }: DatePickerProps) => {
  const dispatch = useAppDispatch()
  const isReset = useAppSelector(getReset)
  const [startDate, setStartDate] = useState(START_DATE)
  const [endDate, setEndDate] = useState(END_DATE)

  useEffect(() => {
    if (isReset) {
      setStartDate(START_DATE)
      setEndDate(END_DATE)
      dispatch(setReset(false))
    }
  }, [dispatch, isReset])

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
        <Button onClick={handleToday} title='오늘' size='medium' />
        <Button onClick={handleWeek} title='1주' size='medium' />
        <Button onClick={handleTotal} title='전체' size='medium' />
      </div>
    </div>
  )
}

export default Datepicker
