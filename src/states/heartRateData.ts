import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

import type { RootState } from '.'

export interface SystemState {
  value: {
    seq: number
    member_seq: number
    avg_beat: number
    crt_ymdt: string
  }[]
}

const INITIAL_STATE: SystemState = {
  value: [],
}

const systemSlice = createSlice({
  name: 'heartRateData',
  initialState: INITIAL_STATE,
  reducers: {
    temp1: (state, action) => {
      state.value = action.payload
    },
    // filter: (state, action) => {
    //   action.payload.filter((item) => dayjs(item.year))
    // }
  },
})

export const { temp1 } = systemSlice.actions

export default systemSlice.reducer

export const tempData = (state: RootState) => state.heartRateData.value
