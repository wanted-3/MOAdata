import styles from './userDetail.module.scss'
import 'react-datepicker/dist/react-datepicker.css'
import HeartRateChart from './HeartRateChart'
import StepRateChart from './StepRateChart'
import { filter, filterTemp2, heart, step } from 'states/userData'
import Datepicker from 'components/common/Datepicker'

const title = ['로그인', '회원번호', '가입일시']

const UserDetail = () => {
  // useMount(() => {
  //   getHeartRateApi(136)?.then((res) => res.map((item) => dispatch(heart(item.data))))
  //   getStepRateApi(136)?.then((res) => res.map((item) => dispatch(step(item.data))))
  // })
  return (
    <div className={styles.detailWrapper}>
      <h1>회원 상세 정보</h1>
      <div>
        <ul className={styles.detail}>
          {title.map((item) => {
            return (
              <li className={styles.liStyle} key={`Mem_info-${item}`}>
                <div className={styles.item}>{item}</div>
                <div className={styles.data}>{item}</div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.chartWrapper}>
        <div>
          <h2 className={styles.chartTitle}>심박수</h2>
          <div className={styles.heartChart}>
            <HeartRateChart />
            <Datepicker dispatchUserDate={filter} />
          </div>
        </div>
        <div>
          <h2 className={styles.chartTitle}>걸음수</h2>
          <div className={styles.stepChart}>
            <StepRateChart />
            <Datepicker dispatchUserDate={filterTemp2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetail
