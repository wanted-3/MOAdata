import styles from './userDetail.module.scss'
import 'react-datepicker/dist/react-datepicker.css'
import ReactDatePicker from 'react-datepicker'
import { useId, useState } from 'react'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useParams } from 'react-router-dom'
import { useMount } from 'react-use'
import HeartRateChart from './HeartRateChart'
import DatePicker from 'components/userDetail/DatePicker'
import { getStepRateApi } from 'services/getData'
import { temp2, tempData2, StepsState } from 'states/stepData'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme, VictoryTooltip } from 'victory'
import dayjs from 'dayjs'

const title = ['로그인', '회원번호', '가입일시']
const button = ['오늘', '일주일', '전체']
interface Graph {
  crt_ymdt: number
  steps: string
}

const UserDetail = () => {
  const dispatch = useAppDispatch()
  const stepRateData: any = useAppSelector(tempData2)

  useMount(() => {
    getStepRateApi().then((res) => dispatch(temp2(res.data)))
  })
  const sampleData = stepRateData.value.map((item: Graph) => {
    return { x: item.crt_ymdt, y: item.steps }
  })

  const stepSum = sampleData.reduce((accumulator: any, currentObject: any) => {
    return accumulator + currentObject.y
  }, 0)

  const cn1 = stepSum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')

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
            <VictoryChart domainPadding={40} height={500} width={450} theme={VictoryTheme.material}>
              <VictoryAxis
                tickFormat={(date, idx) => {
                  return idx === date.length ? '1일' : ''
                }}
              />
              <VictoryAxis dependentAxis tickFormat={(x) => `${x}걸음`} />
              <VictoryBar data={sampleData} style={{ data: { fill: '#c43a31' } }} />
            </VictoryChart>
          </div>
          <p>날짜</p>
          <p>총{cn1}걸음</p>
        </div>
      </div>
      <DatePicker />
    </div>
  )
}

export default UserDetail
