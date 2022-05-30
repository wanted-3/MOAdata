import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'

export interface SystemState {
  value: {}
}

const INITIAL_STATE: SystemState = {
  value: {},
}

const systemSlice = createSlice({
  name: 'stepData',
  initialState: INITIAL_STATE,
  reducers: {
    temp2: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { temp2 } = systemSlice.actions

export default systemSlice.reducer

export const tempData2 = (state: RootState) => state.stepData
