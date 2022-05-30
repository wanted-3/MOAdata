import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '.'

export interface DateState {
  date: {
    userDate: {
      startDate: string
      endDate: string
    }
    stepDate: {
      startDate: string
      endDate: string
    }
    heartRateDate: {
      startDate: string
      endDate: string
    }
  }
}

const INITIAL_STATE: DateState = {
  date: {
    userDate: {
      startDate: '2022-01-01',
      endDate: '2022-05-30',
    },
    stepDate: {
      startDate: '2022-01-01',
      endDate: '2022-05-30',
    },
    heartRateDate: {
      startDate: '2022-01-01',
      endDate: '2022-05-03',
    },
  },
}

const systemSlice = createSlice({
  name: 'dateData',
  initialState: INITIAL_STATE,
  reducers: {
    setUserDate: (state, action) => {
      state.date.userDate = action.payload
    },
    setStepDate: (state, action) => {
      state.date.stepDate = action.payload
    },
    setHeartRateDate: (state, action) => {
      state.date.heartRateDate = action.payload
    },
  },
})

export const { setUserDate, setStepDate, setHeartRateDate } = systemSlice.actions

export default systemSlice.reducer

export const getDate = (state: RootState) => state.dateData.date
