import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'
import type { RootState } from '.'

interface UserState {
  value: {
    all: {
      heartRate: any[]
      step: any[]
    }
    filter: {
      heartRate: any[]
      step: any[]
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
    heart: (state, action) => {
      state.value.all.heartRate = state.value.all.heartRate.concat(action.payload)

      // console.log(current(state.value.all))
      // console.log(dayjs('2022-02-26 20:21:31').format('YYYY-MM-DD'))

      // 2022-02-26 20:21:31
      // 2022-02-26
    },

    step: (state, action) => {
      state.value.all.step = state.value.all.step.concat(action.payload)
    },

    filter: (state, action) => {
      state.value.filter.heartRate = state.value.all.heartRate.filter((item) => {
        return (
          action.payload.startDate <= dayjs(item.crt_ymdt).format('YYYY-MM-DD') &&
          dayjs(item.crt_ymdt).format('YYYY-MM-DD') <= action.payload.endDate
        )
      })
    },

    filterTemp2: (state, action) => {
      state.value.filter.step = state.value.all.step.filter((item) => {
        return (
          action.payload.startDate <= dayjs(item.crt_ymdt).format('YYYY-MM-DD') &&
          dayjs(item.crt_ymdt).format('YYYY-MM-DD') <= action.payload.endDate
        )
      })
    },

    userInfoTemp: (state, action) => {
      state.value.userInfo = state.value.userInfo.filter((item) => item.member_seq === action.payload)

      // console.log(state.value.userInfo)
    },

    reset: (state) => {
      state.value = INITIAL_STATE.value
    },
  },
})

export const { heart, step, filter, filterTemp2, userInfoTemp, reset } = systemSlice.actions

export default systemSlice.reducer

export const getUserData = (state: RootState) => state.userData.value
