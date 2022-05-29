import { axios } from 'hooks/worker'

const heartRateURL = '/data/heartrate_data/heartrate_136_0226_user1.json'
const stepURL = '/data/step_step/step_136_0226_user1.json'

export const getHeartRateApi = () => {
  return axios.get(heartRateURL)
}
