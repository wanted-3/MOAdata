import { VictoryAxis, VictoryBar, VictoryChart, VictoryStack, VictoryTheme, VictoryTooltip } from 'victory'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import { useParams } from 'react-router-dom'
import { useId, useState } from 'react'
import { useMount } from 'react-use'
import { temp2, tempData2, StepsState } from 'states/stepData'
import { getStepRateApi } from 'services/getData'
import styles from './stepRateChart.module.scss'

interface Graph {
  crt_ymdt: number
  steps: string
}

const StepRateChart = () => {
  // const dispatch = useAppDispatch()
  // const stepRateData: any = useAppSelector(tempData2)

  // useMount(() => {
  //   getStepRateApi().then((res) => dispatch(temp2(res.data)))
  // })
  // const sampleData = stepRateData.value.map((item: Graph) => {
  //   return { x: item.crt_ymdt, y: item.steps }
  // })

  // const stepSum = sampleData.reduce((accumulator: any, currentObject: any) => {
  //   return accumulator + currentObject.y
  // }, 0)

  // const cn1 = stepSum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')

  // const { userId } = useParams()

  return (
    <div>
      {/* <div>
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
      <p>총{cn1}걸음</p> */}
    </div>
  )
}

export default StepRateChart
