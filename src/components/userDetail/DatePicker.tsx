import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useState } from 'react'

import styles from './datePicker.module.scss'
import dayjs from 'dayjs'

const MIN_DATE = new Date('2022-01-01')
const TODAY = new Date()
const WEEK = new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() - 7)

const formatedDate = (date: Date) => {
  return dayjs(date).format('YYYY-MM-DD')
}

const DatePicker = () => {
  const [startDate, setStartDate] = useState({ day: MIN_DATE, state: '전체' })

  const [endDate, setEndDate] = useState({ day: TODAY, state: '전체' })

  const handleChangeStartDate = (date: Date) => {
    setStartDate({ day: date, state: formatedDate(date) })
  }

  const handleChangeEndDate = (date: Date) => {
    setEndDate({ day: date, state: formatedDate(date) })
  }

  const handleClickToday = () => {
    setStartDate({ day: TODAY, state: formatedDate(TODAY) })
    setEndDate({ day: TODAY, state: formatedDate(TODAY) })
  }

  const handleClickWeek = () => {
    setStartDate({ day: WEEK, state: formatedDate(WEEK) })
    setEndDate({ day: TODAY, state: formatedDate(TODAY) })
  }

  const handleClickAll = () => {
    setStartDate({ day: MIN_DATE, state: '전체' })
    setEndDate({ day: TODAY, state: '전체' })
  }

  useEffect(() => {
    if (dayjs(startDate.day).isAfter(endDate.day)) return

    console.log('시작 날짜', formatedDate(startDate.day))
    console.log('종료 날짜', formatedDate(endDate.day))
  }, [startDate, endDate])

  return (
    <div>
      <div className={styles.chartWrap}>
        <div className={styles.lookUp}>조회기간</div>
        <div className={styles.temp}>
          <ReactDatePicker
            className={styles.startDate}
            dateFormat={startDate.state}
            selected={startDate.day}
            startDate={startDate.day}
            endDate={endDate.day}
            onChange={handleChangeStartDate}
            minDate={MIN_DATE}
            maxDate={TODAY}
          />
          <span className={styles.test}>~</span>
          <ReactDatePicker
            className={styles.startDate}
            dateFormat={endDate.state}
            selected={endDate.day}
            startDate={startDate.day}
            endDate={endDate.day}
            onChange={handleChangeEndDate}
            minDate={MIN_DATE}
            maxDate={TODAY}
            selectsEnd
          />
        </div>
      </div>
      <div>
        <button type='button' onClick={handleClickToday}>
          오늘
        </button>
        <button type='button' onClick={handleClickWeek}>
          일주일
        </button>
        <button type='button' onClick={handleClickAll}>
          전체
        </button>
      </div>
    </div>
  )
}

export default DatePicker
