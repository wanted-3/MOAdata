import { VictoryAxis, VictoryBar, VictoryChart } from 'victory'
import styles from './stepRateChart.module.scss'
import { useAppSelector } from 'hooks/useAppSelector'
import { getUserData } from 'states/userData'
import dayjs from 'dayjs'

const StepRateChart = () => {
  const stepRateData = useAppSelector(getUserData)

  const sampleData = stepRateData.filter.step.map((item) => {
    return { x: item.crt_ymdt, y: item.steps }
  })

  const stepSum = sampleData.reduce((accumulator: any, currentObject: any) => {
    return accumulator + currentObject.y
  }, 0)

  const cn1 = stepSum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')

  return (
    <>
      <div className={styles.chart}>
        <VictoryChart
          animate={{
            duration: 2500,
            easing: 'bounce',
          }}
          domainPadding={{ y: 40 }}
          width={400}
          height={350}
          padding={{ left: 90, bottom: 50, top: 50, right: 50 }}
        >
          <VictoryAxis
            tickFormat={(t, index) => {
              return index % Math.round(sampleData.length / 8) === 0 ? dayjs(t).format('MM-DD') : ''
            }}
          />
          <VictoryAxis dependentAxis tickFormat={(x) => `${x}걸음`} />
          <VictoryBar data={sampleData} style={{ data: { fill: '#A69BD1' } }} />
        </VictoryChart>
      </div>
      <div className={styles.chartDetail}>
        <p>날짜</p>
        <p>총{cn1}걸음</p>
      </div>
    </>
  )
}

export default StepRateChart
