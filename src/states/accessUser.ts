import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '.'

export interface userState {
  access: boolean
  loginID: string
}

const INITIAL_STATE: userState = {
  access: false,
  loginID: '',
}

const userSlice = createSlice({
  name: 'accessUser',
  initialState: INITIAL_STATE,
  reducers: {
    setLoginState: (state, action) => {
      state.access = action.payload
    },
    setLoginID: (state, action) => {
      state.loginID = action.payload
    },
  },
})

export const { setLoginState, setLoginID } = userSlice.actions

export default userSlice.reducer

export const getAccessState = (state: RootState) => state.accessUser.access
export const getLoginID = (state: RootState) => state.accessUser.loginID
