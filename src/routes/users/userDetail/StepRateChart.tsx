import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from 'victory'
import styles from './stepRateChart.module.scss'
import { useAppSelector } from 'hooks/useAppSelector'
import { useParams } from 'react-router-dom'
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

  const { userId } = useParams()

  return (
<<<<<<< HEAD
    <div className={styles.wrap}>
      <div className={styles.graphWrap}>
=======
    <>
      <div className={styles.chart}>
>>>>>>> 1e749575745fa1d1972af60e5e3c76c85e572f14
        <VictoryChart
          animate={{
            duration: 2000,
            easing: 'bounce',
          }}
          domainPadding={{ y: 40 }}
          height={400}
          width={500}
          padding={{ left: 70, bottom: 40, top: 50, right: 50 }}
        >
          <VictoryAxis
            tickFormat={(t, index) => {
              return index % Math.round(sampleData.length / 8) === 0 ? dayjs(t).format('MM-DD') : ''
            }}
          />
          <VictoryAxis dependentAxis tickFormat={(x) => `${x}걸음`} />
          <VictoryBar data={sampleData} style={{ data: { fill: '#c43a31' } }} />
        </VictoryChart>
      </div>
      <p>날짜</p>
      <p>총{cn1}걸음</p>
    </>
  )
}

export default StepRateChart
