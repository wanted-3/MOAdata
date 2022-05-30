import styles from './userDetail.module.scss'
import 'react-datepicker/dist/react-datepicker.css'
import ReactDatePicker from 'react-datepicker'
import { useId, useState } from 'react'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useParams } from 'react-router-dom'
import { useMount } from 'react-use'
import { getHeartRateApi } from 'services/getData'
import { temp, tempData } from 'states/heartRateData'
import HeartRateChart from './HeartRateChart'
import DatePicker from 'components/userDetail/DatePicker'

const title = ['로그인', '회원번호', '가입일시']

const UserDetail = () => {
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
          <div className={styles.chart}>
            <HeartRateChart />
          </div>
          <span>날짜</span>
          <span>bpm/걸음</span>
        </div>
      </div>
      <DatePicker />
    </div>
  )
}

export default UserDetail
