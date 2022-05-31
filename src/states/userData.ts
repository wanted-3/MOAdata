import { createSlice } from '@reduxjs/toolkit'
import { IHeartRate, IStep } from 'types/chartData'
import { formatedDate } from 'utils/date'
import type { RootState } from '.'

interface UserState {
  value: {
    all: {
      heartRate: IHeartRate[]
      step: IStep[]
    }
    filter: {
      heartRate: IHeartRate[]
      step: IStep[]
    }
    userInfo: {
      id: string
      date: string
      member_seq: number
    }[]
  }
}

const INITIAL_STATE: UserState = {
  value: {
    all: {
      heartRate: [],
      step: [],
    },
    filter: {
      heartRate: [],
      step: [],
    },
    userInfo: [
      {
        id: 'asdf',
        date: '2022-05-28 12:12:12',
        member_seq: 136,
      },
      {
        id: 'zxcv',
        date: '2022-05-30 10:24:45',
        member_seq: 328,
      },
      {
        id: 'qwer',
        date: '2022-04-01 13:13:13',
        member_seq: 380,
      },
    ],
  },
}

const systemSlice = createSlice({
  name: 'userData',
  initialState: INITIAL_STATE,
  reducers: {
    getHeartRateData: (state, action) => {
      state.value.all.heartRate = state.value.all.heartRate.concat(action.payload)
      state.value.filter.heartRate = state.value.all.heartRate
    },

    getStepData: (state, action) => {
      state.value.all.step = state.value.all.step.concat(action.payload)
      state.value.filter.step = state.value.all.step
    },

    getFilteredHeartRateData: (state, action) => {
      state.value.filter.heartRate = state.value.all.heartRate.filter((item) => {
        return (
          action.payload.startDate <= formatedDate(item.crt_ymdt) &&
          formatedDate(item.crt_ymdt) <= action.payload.endDate
        )
      })
    },

    getFilteredStepData: (state, action) => {
      state.value.filter.step = state.value.all.step.filter((item) => {
        return (
          action.payload.startDate <= formatedDate(item.crt_ymdt) &&
          formatedDate(item.crt_ymdt) <= action.payload.endDate
        )
      })
    },

    userInfoTemp: (state, action) => {
      state.value.userInfo = state.value.userInfo.filter((item) => item.member_seq === action.payload)

      // console.log(state.value.userInfo)
    },

    resetUserData: (state) => {
      state.value = INITIAL_STATE.value
    },
  },
})

export const {
  getHeartRateData,
  getStepData,
  getFilteredHeartRateData,
  getFilteredStepData,
  userInfoTemp,
  resetUserData,
} = systemSlice.actions

export default systemSlice.reducer

export const getUserData = (state: RootState) => state.userData.value
