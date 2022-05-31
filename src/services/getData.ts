import { axios } from 'hooks/worker'

import { HEART_DATA, STEP_DATA } from 'utils/dummy'

export const getHeartRateApi = (userId: number) => {
  const getHearRate = HEART_DATA.find((item) => item.userId === userId)

  if (getHearRate) {
    const itemList = getHearRate.url.map((item) => axios.get(item))

    return Promise.all(itemList).then((results) => results)
  }
  return null
}

export const getStepRateApi = (userId: number) => {
  const getStep = STEP_DATA.find((item) => item.userId === userId)

  if (getStep) {
    const itemList = getStep.url.map((item) => axios.get(item))

    return Promise.all(itemList).then((results) => results)
  }

  return null
}
