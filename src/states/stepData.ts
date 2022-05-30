import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'

export interface StepsState {
  value: {
    member_seq: number
    seq: number
    steps: number
    minutes: number
    distance: number
    calorie: number
    crt_ymdt: string
  }[]
}

const INITIAL_STATE: StepsState = {
  value: [],
}

const systemSlice = createSlice({
  name: 'stepData',
  initialState: INITIAL_STATE,
  reducers: {
    temp2: (state, action) => {
      state.value = action.payload
    },
    filter: (state, action) => {
      // const actionData = action.payload.filter((item: string) => userId === item.member_seq)
      // actionData.forEach((item: any) => {
      // })
    },
  },
})

export const { temp2 } = systemSlice.actions

export default systemSlice.reducer

export const tempData2 = (state: RootState) => state.stepData
