import { createSlice } from '@reduxjs/toolkit'
import { IHeartRate, IStep } from 'types/chartData'
import { formatedDate } from 'utils/date'
import { userID } from 'utils/member'
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
    userInfo: userID,
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

    getUserInfo: (state, action) => {
      state.value.userInfo = state.value.userInfo.filter((item) => item.member_seq === action.payload)
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
  getUserInfo,
  resetUserData,
} = systemSlice.actions

export default systemSlice.reducer

export const getUserData = (state: RootState) => state.userData.value
