import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'

export interface userState {
  access: boolean
}

const INITIAL_STATE: userState = {
  access: false,
}

const userSlice = createSlice({
  name: 'accessUser',
  initialState: INITIAL_STATE,
  reducers: {
    setAccessUser: (state, action) => {
      state.access = action.payload
    },
  },
})

export const accessActions = userSlice.actions

export default userSlice.reducer

export const getAccessState = (state: RootState) => state.accessUser.access
