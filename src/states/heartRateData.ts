import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'

export interface SystemState {
  value: {}
}

const INITIAL_STATE: SystemState = {
  value: {},
}

const systemSlice = createSlice({
  name: 'heartRateData',
  initialState: INITIAL_STATE,
  reducers: {
    temp: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { temp } = systemSlice.actions

export default systemSlice.reducer

export const tempData = (state: RootState) => state.heartRateData
