import styles from './userDetail.module.scss'
import 'react-datepicker/dist/react-datepicker.css'
import { useMemo } from 'react'
import { getFilteredHeartRateData, getFilteredStepData, getUserData } from 'states/userData'
import Datepicker from 'components/common/Datepicker'
import { useAppSelector } from 'hooks/useAppSelector'
import UserInfoItem from './UserInfoItem'
import StepRateChart from 'components/users/userDetail/StepRateChart'
import HeartRateChart from 'components/users/userDetail/HeartRateChart'

const UserDetail = () => {
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
          <h2 className={styles.chartTitle}>심박수</h2>
          <div className={styles.heartChart}>
            <HeartRateChart />
            <div className={styles.dataPickerWrap}>
              <Datepicker dispatchUserDate={getFilteredHeartRateData} />
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.chartTitle}>걸음수</h2>
          <div className={styles.stepChart}>
            <StepRateChart />
            <div className={styles.dataPickerWrap}>
              <Datepicker dispatchUserDate={getFilteredStepData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetail
