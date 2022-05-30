import dayjs from 'dayjs'
import { useAppSelector } from 'hooks/useAppSelector'
import { useMemo } from 'react'
import { getUserData } from 'states/userData'

import { VictoryAxis, VictoryChart, VictoryLine } from 'victory'
import styles from './heartRateChart.module.scss'

const HeartRateChart = () => {
  const testData = useAppSelector(getUserData)

  console.log(testData)
  const Tdata = useMemo(() => {
    return testData.filter.heartRate
      .map((item) => {
        return { x: item.crt_ymdt, y: item.avg_beat }
      })
      .reverse()
  }, [testData])

  const maxima = useMemo(() => {
    return Math.floor(
      Tdata.map((item) => item.y).reduce((acc, cur) => {
        return acc + cur
      }, 0) / Tdata.length
    )
  }, [Tdata])

  return (
    <div>
      <VictoryChart
        animate={{
          duration: 1000,
          onLoad: { duration: 2000 },
        }}
        width={450}
        height={500}
      >
        <VictoryAxis
          tickFormat={(t, index) => {
            return (index + 1) % Math.round(Tdata.length / 5) === 0 ? dayjs(t).format('HH:mm:ss') : ''
          }}
        />
        <VictoryAxis dependentAxis padding={100} tickFormat={(t) => `${t}bpm`} />

        <VictoryLine
          style={{
            data: { stroke: '#c43a31' },
            parent: { border: '1px solid #ccc' },
          }}
          data={Tdata}
        />
      </VictoryChart>

      <p>평균 {maxima} bpm</p>
    </div>
  )
}

export default HeartRateChart
