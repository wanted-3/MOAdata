import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '.'

export interface DateState {
  value: {
    all: {
      heartRate: any[]
      step: any[]
    }
    filter: {
      heartRate: any[]
      step: any[]
    }
  }
}

const INITIAL_STATE: DateState = {
  value: {
    all: {
      heartRate: [],
      step: [],
    },
    filter: {
      heartRate: [],
      step: [],
    },
  },
}

const systemSlice = createSlice({
  name: 'dateData',
  initialState: INITIAL_STATE,
  reducers: {
    temp: () => {},
  },
})

export const { temp } = systemSlice.actions

export default systemSlice.reducer

export const getDate = (state: RootState) => state.dateData.date
