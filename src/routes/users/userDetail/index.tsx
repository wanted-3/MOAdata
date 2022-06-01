import { useMemo } from 'react'
import 'react-datepicker/dist/react-datepicker.css'

import { getFilteredHeartRateData, getFilteredStepData, getUserData } from 'states/userData'
import { useAppSelector } from 'hooks/useAppSelector'

import HeartRateChart from 'components/users/userDetail/HeartRateChart'
import StepRateChart from 'components/users/userDetail/StepRateChart'
import UserInfoItem from 'components/users/userDetail/UserInfoItem'
import Datepicker from 'components/common/Datepicker'
import styles from './userDetail.module.scss'

const UserDetail = () => {
  const getId = useAppSelector(getUserData)

  const userInformation = useMemo(() => {
    return [
      { title: '로그인 ID', value: getId.userInfo[0].id },
      { title: '회원번호', value: getId.userInfo[0].member_seq },
      { title: '가입일시', value: getId.userInfo[0].date },
    ]
  }, [getId.userInfo])

  return (
    <div className={styles.userDetailWrapper}>
      <h1 className={styles.title}>회원 상세 정보</h1>
      <ul>
        {userInformation.map((item) => (
          <UserInfoItem key={`Mem_info-${item.value}`} item={item} />
        ))}
      </ul>
      <div className={styles.chartWrapper}>
        <div className={styles.heartRateChart}>
          <HeartRateChart />
          <Datepicker dispatchUserDate={getFilteredHeartRateData} column />
        </div>
        <div className={styles.stepDataChart}>
          <StepRateChart />
          <Datepicker dispatchUserDate={getFilteredStepData} column />
        </div>
      </div>
    </div>
  )
}

export default UserDetail
