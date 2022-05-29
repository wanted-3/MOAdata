import { configureStore } from '@reduxjs/toolkit'
import heartRateData from './heartRateData'
import stepData from './stepData'

export const store = configureStore({
  reducer: { stepData, heartRateData },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
