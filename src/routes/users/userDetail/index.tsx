import styles from './userDetail.module.scss'
import 'react-datepicker/dist/react-datepicker.css'
import ReactDatePicker from 'react-datepicker'
import { useState } from 'react'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useParams } from 'react-router-dom'
import { useMount } from 'react-use'
import { getHeartRateApi } from 'services/getData'
import { temp, tempData } from 'states/heartRateData'

const title = ['로그인', '회원번호', '가입일시']

const UserDetail = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const minDate = new Date()
  const dispatch = useAppDispatch()

  useMount(() => {
    getHeartRateApi().then((res) => dispatch(temp(res.data)))
  })

  const heartRateData = useAppSelector(tempData)

  const { userId } = useParams()
  return (
    <div className={styles.detailWrapper}>
      <h1>회원 상세 정보</h1>
      <div className={styles.detail}>
        <ul>
          {title.map((item) => {
            return (
              <li className={styles.liStyle} key={`Mem_info-${item}`}>
                <div className={styles.item}>{item}</div>
                <div className={styles.data}>data</div>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <div>
          <h2>심박수or걸음수</h2>
          <div className={styles.chart}>차트들어갈자리</div>
          <span>날짜</span>
          <span>bpm/걸음</span>
          <div className={styles.chartWrap}>
            <div className={styles.lookUp}>조회기간</div>
            <ReactDatePicker
              className={styles.startDate}
              minDate={minDate}
              dateFormat='전체'
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
              startDate={startDate}
              endDate={endDate}
            />
            <p className={styles.p}>~</p>
            <ReactDatePicker
              className={styles.startDate}
              selected={endDate}
              onChange={(date: Date) => setEndDate(date)}
              dateFormat='전체'
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              selectsEnd
            />
          </div>
          <button type='button'>오늘</button>
          <button type='button'>일주일</button>
          <button type='button'>전체</button>
        </div>
      </div>
    </div>
  )
}

export default UserDetail
