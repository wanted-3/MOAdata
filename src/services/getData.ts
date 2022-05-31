import { axios } from 'hooks/worker'

const step = [
  {
    userId: 136,
    url: [
      '/data/step_data/step_136_0226_user1.json',
      '/data/step_data/step_136_0308_user1.json',
      '/data/step_data/step_136_0419_user1.json',
    ],
  },
  {
    userId: 328,
    url: [
      '/data/step_data/step_328_0416_user2.json',
      '/data/step_data/step_328_0419_user2.json',
      '/data/step_data/step_328_0420_user2.json',
    ],
  },
  {
    userId: 380,
    url: [
      '/data/step_data/step_380_0417_user3.json',
      '/data/step_data/step_380_0418_user3.json',
      '/data/step_data/step_380_0419_user3.json',
    ],
  },
]
const heart = [
  {
    userId: 136,
    url: [
      '/data/heartrate_data/heartrate_136_0226_user1.json',
      '/data/heartrate_data/heartrate_136_0308_user1.json',
      '/data/heartrate_data/heartrate_136_0419_user1.json',
    ],
  },
  {
    userId: 328,
    url: [
      '/data/heartrate_data/heartrate_328_0416_user2.json',
      '/data/heartrate_data/heartrate_328_0419_user2.json',
      '/data/heartrate_data/heartrate_328_0420_user2.json',
    ],
  },
  {
    userId: 380,
    url: [
      '/data/heartrate_data/heartrate_380_0417_user3.json',
      '/data/heartrate_data/heartrate_380_0418_user3.json',
      '/data/heartrate_data/heartrate_380_0419_user3.json',
    ],
  },
]

export const getHeartRateApi = (userId: number) => {
  const test = heart.find((item) => item.userId === userId)

  if (test) {
    const abb = test.url.map((item) => axios.get(item))

    return Promise.all(abb).then((results) => results)
  }
  return null
}

export const getStepRateApi = (userId: number) => {
  const getStep = step.find((it) => it.userId === userId)

  if (getStep) {
    const itemList = getStep.url.map((it) => axios.get(it))

    return Promise.all(itemList).then((results) => results)
  }

  return null
}

// import { axios } from 'hooks/worker'

// {
//       userId: 136,
//       url: [
//         '/data/step_data/step_136_0226_user1.json',
//         '/data/step_data/step_136_0308_user1.json',
//         '/data/step_data/step_136_0419_user1.json',
//       ],
//     },
// ]

// const heartRateURL = '/data/heartrate_data/heartrate_136_0226_user1.json'
// const stepURL = '/data/step_step/step_136_0226_user1.json'

// export const getHeartRateApi = (userId: number) => {
//   const user = temp.find((item) => item.userId === userId)

//   if (user) {
//     const test = user.url.map((item) => axios.get(item))
//     Promise.allSettled(test).then((results) => console.log(results))
//   }

//   // return axios.get(heartRateURL)
// }
