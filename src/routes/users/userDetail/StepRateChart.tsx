import { VictoryAxis, VictoryBar, VictoryChart, VictoryTheme } from 'victory'

import { useAppSelector } from 'hooks/useAppSelector'
import { useParams } from 'react-router-dom'
import { getUserData } from 'states/userData'

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
    <div>
      <div>
        <VictoryChart
          animate={{
            duration: 1000,
            onLoad: { duration: 2000 },
          }}
          domainPadding={40}
          height={500}
          width={500}
          theme={VictoryTheme.material}
        >
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
  )
}

export default StepRateChart
