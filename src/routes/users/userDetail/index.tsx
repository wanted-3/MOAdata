import styles from './userDetail.module.scss'
import 'react-datepicker/dist/react-datepicker.css'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useMount } from 'react-use'
import StepRateChart from './StepRateChart'
import HeartRateChart from './HeartRateChart'
import { getHeartRateApi, getStepRateApi } from 'services/getData'
import { filter, filterTemp2, heart, step } from 'states/userData'
import { useAppDispatch } from 'hooks/useAppDispatch'
import Datepicker from 'components/common/Datepicker'

const title = ['로그인', '회원번호', '가입일시']

const UserDetail = () => {
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
          <h2>심박수</h2>
          <div className={styles.chart}>
            <HeartRateChart />
            <Datepicker dispatchUserDate={filter} />
          </div>
        </div>
        <div>
          <h2>걸음수</h2>
          <div className={styles.chart}>
            <StepRateChart />
            <Datepicker dispatchUserDate={filterTemp2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetail
