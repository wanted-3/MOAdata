import dayjs from 'dayjs'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useMemo } from 'react'
import { useMount } from 'react-use'
import { getHeartRateApi, getStepRateApi } from 'services/getData'
import { getUserData, heart } from 'states/userData'

import { VictoryAxis, VictoryChart, VictoryLine } from 'victory'
import styles from './heartRateChart.module.scss'

const HeartRateChart = () => {
  const dispatch = useAppDispatch()
  const testData = useAppSelector(getUserData)

  useMount(() => {
    getHeartRateApi(136)?.then((res) => res.map((item) => dispatch(heart(item.data))))
  })
  // useMount(() => {
  //   getStepRateApi(136)?.then((res) => res.map((item) => dispatch(step(item.data))))
  // })

  // const Tdata = useMemo(() => {
  //   return testData
  //     .map((item) => {
  //       return { x: item.crt_ymdt, y: item.avg_beat }
  //     })
  //     .reverse()
  // }, [testData])

  // const maxima = useMemo(() => {
  //   return Math.floor(
  //     Tdata.map((item) => item.y).reduce((acc, cur) => {
  //       return acc + cur
  //     }, 0) / Tdata.length
  //   )
  // }, [Tdata])

  return (
    <div className={styles.wraper}>
      {/* <VictoryChart
        animate={{
          duration: 1000,
          onLoad: { duration: 2000 },
        }}
        width={400}
        height={400}
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
      <div>
        <span>평균 {maxima} bpm</span>
      </div> */}
    </div>
  )
}

export default HeartRateChart
