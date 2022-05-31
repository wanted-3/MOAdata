import dayjs from 'dayjs'
import { useAppSelector } from 'hooks/useAppSelector'
import { useMemo } from 'react'
import { getUserData } from 'states/userData'

import { VictoryAxis, VictoryChart, VictoryLine } from 'victory'
import styles from './heartRateChart.module.scss'

const HeartRateChart = () => {
  const testData = useAppSelector(getUserData)

  const Tdata = useMemo(() => {
    return testData.filter.heartRate
      .map((item) => {
        return { x: item.crt_ymdt, y: item.avg_beat }
      })
      .reverse()
  }, [testData])

  const maxima = useMemo(() => {
    return Math.floor(
      Tdata.map((item) => item.y).reduce((acc: number, cur: number) => {
        return acc + cur
      }, 0) / Tdata.length
    )
  }, [Tdata])

  return (
    <>
      <div className={styles.chart}>
        <VictoryChart
          animate={{
            duration: 2500,
            onLoad: { duration: 2500 },
          }}
          width={400}
          height={350}
          padding={{ left: 90, bottom: 50, top: 50, right: 50 }}
        >
          <VictoryAxis
            tickFormat={(t, index) => {
              return (index + 1) % Math.round(Tdata.length / 5) === 0 ? dayjs(t).format('HH:mm:ss') : ''
            }}
          />
          <VictoryAxis dependentAxis padding={100} tickFormat={(t) => `${t}bpm`} />

          <VictoryLine
            style={{
              data: { stroke: '#A697FF' },
            }}
            data={Tdata}
          />
        </VictoryChart>
      </div>
      <div className={styles.chartDetail}>
        <p>날짜</p>
        <p>평균 {maxima} bpm</p>
      </div>
    </>
  )
}

export default HeartRateChart
