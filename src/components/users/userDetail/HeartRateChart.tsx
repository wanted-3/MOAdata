import { VictoryAxis, VictoryChart, VictoryLine } from 'victory'
import { useMemo } from 'react'
import dayjs from 'dayjs'

import { useAppSelector } from 'hooks/useAppSelector'
import { getUserData } from 'states/userData'

import styles from './heartRateChart.module.scss'

const HeartRateChart = () => {
  const heartRateData = useAppSelector(getUserData)

  const lineChartData = useMemo(() => {
    return heartRateData.filter.heartRate
      .map((item) => {
        return { x: item.crt_ymdt, y: item.avg_beat }
      })
      .reverse()
  }, [heartRateData])

  const averageBpm = useMemo(() => {
    return Math.floor(
      lineChartData
        .map((item) => item.y)
        .reduce((acc: number, cur: number) => {
          return acc + cur
        }, 0) / lineChartData.length
    )
  }, [lineChartData])

  return (
    <div className={styles.heartChart}>
      <h2 className={styles.chartTitle}>심박수</h2>
      <div className={styles.chart}>
        <VictoryChart
          animate={{
            duration: 2500,
            onLoad: { duration: 2500 },
          }}
          width={500}
          height={450}
          padding={{ left: 80, bottom: 50, top: 50, right: 50 }}
        >
          <VictoryAxis
            tickFormat={(t, index) => {
              return (index + 1) % Math.round(lineChartData.length / 5) === 0 ? dayjs(t).format('HH:mm:ss') : ''
            }}
          />
          <VictoryAxis dependentAxis padding={100} tickFormat={(t) => `${t}bpm`} />

          <VictoryLine
            style={{
              data: { stroke: '#A697FF' },
            }}
            data={lineChartData}
          />
        </VictoryChart>
      </div>
      <dl className={styles.chartDetail}>
        <div>
          <dt>날짜</dt>
          <dd>
            {heartRateData.heartRateDate.startDate} ~ {heartRateData.heartRateDate.endDate}
          </dd>
        </div>
        <div>
          <dt> 평균</dt>
          <dd>{averageBpm || 0} bpm</dd>
        </div>
      </dl>
    </div>
  )
}

export default HeartRateChart
