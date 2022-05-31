import { VictoryAxis, VictoryBar, VictoryChart } from 'victory'
import dayjs from 'dayjs'

import { useAppSelector } from 'hooks/useAppSelector'
import { getUserData } from 'states/userData'

import styles from './stepRateChart.module.scss'

const StepRateChart = () => {
  const stepRateData = useAppSelector(getUserData)

  const barChartData = stepRateData.filter.step.map((item) => {
    return { x: item.crt_ymdt, y: item.steps }
  })

  const stepSum = barChartData.reduce((accumulator, currentObject) => {
    return accumulator + currentObject.y
  }, 0)

  const stepTotalCount = stepSum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')

  return (
    <div className={styles.stepChart}>
      <h2 className={styles.chartTitle}>걸음수</h2>
      <div className={styles.chart}>
        <VictoryChart
          animate={{
            duration: 2500,
            easing: 'bounce',
          }}
          domainPadding={{ y: 40 }}
          width={500}
          height={450}
          padding={{ left: 90, bottom: 50, top: 50, right: 40 }}
        >
          <VictoryAxis
            tickFormat={(t, index) => {
              return index % Math.round(barChartData.length / 8) === 0 ? dayjs(t).format('MM-DD') : ''
            }}
          />
          <VictoryAxis dependentAxis tickFormat={(x) => `${x}걸음`} />
          <VictoryBar data={barChartData} style={{ data: { fill: '#A69BD1' } }} />
        </VictoryChart>
      </div>
      <dl className={styles.chartDetail}>
        <div>
          <dt>날짜</dt>
          <dd>
            {stepRateData.stepDate.startDate} ~ {stepRateData.stepDate.endDate}
          </dd>
        </div>
        <div>
          <dt>총</dt>
          <dd>{stepTotalCount}걸음</dd>
        </div>
      </dl>
    </div>
  )
}

export default StepRateChart
