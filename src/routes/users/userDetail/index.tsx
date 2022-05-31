import styles from './userDetail.module.scss'
import 'react-datepicker/dist/react-datepicker.css'
import { useId, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import StepRateChart from './StepRateChart'
import HeartRateChart from './HeartRateChart'
import { filter, filterTemp2, getUserData } from 'states/userData'
import Datepicker from 'components/common/Datepicker'
import { useAppSelector } from 'hooks/useAppSelector'
import UserInfoItem from './UserInfoItem'

const UserDetail = () => {
  const { userId } = useParams()
  const getId = useAppSelector(getUserData)

  const userInformation = useMemo(() => {
    return [
      { title: '로그인', value: getId.userInfo[0].id },
      { title: '회원번호', value: getId.userInfo[0].member_seq },
      { title: '가입일시', value: getId.userInfo[0].date },
    ]
  }, [getId.userInfo])

  return (
    <div className={styles.detailWrapper}>
      <h1>회원 상세 정보</h1>
      <div className={styles.detail}>
        <ul>
          {userInformation.map((item) => (
            <UserInfoItem key={`Mem_info-${item.value}`} item={item} />
          ))}
        </ul>
      </div>
      <div className={styles.chartWrapper}>
        <div>
          <h2>심박수or걸음수</h2>
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
