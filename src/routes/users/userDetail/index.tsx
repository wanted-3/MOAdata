import styles from './userDetail.module.scss'
import 'react-datepicker/dist/react-datepicker.css'
import { useId, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMount } from 'react-use'
import StepRateChart from './StepRateChart'
import DatePicker from 'components/userDetail/DatePicker'
import HeartRateChart from './HeartRateChart'

const title = ['로그인', '회원번호', '가입일시']

const UserDetail = () => {
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
      <div className={styles.chartWrapper}>
        <div>
          <h2>심박수or걸음수</h2>
          <div className={styles.chart}>
            <HeartRateChart />
          </div>
        </div>
        <div>
          <h2>걸음수</h2>
          <div className={styles.chart}>
            <StepRateChart />
          </div>
        </div>
      </div>
      <DatePicker />
    </div>
  )
}

export default UserDetail
