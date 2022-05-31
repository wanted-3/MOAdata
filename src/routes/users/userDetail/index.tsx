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
import { useEffect } from 'react'

const title = ['로그인', '회원번호', '가입일시']

const UserDetail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { userId } = useParams()

  const preventReload = () => {
    navigate('/users')
  }
  useEffect(() => {
    window.addEventListener('beforeunload', preventReload)
  }, [])

  // useEffect(() => {
  //   navigate('/users')
  // }, [])
  // useMount(() => {
  //   getHeartRateApi(136)?.then((res) => res.map((item) => dispatch(heart(item.data))))
  //   getStepRateApi(136)?.then((res) => res.map((item) => dispatch(step(item.data))))
  // })
  // eslint-disable-next-line no-restricted-globals
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
