import dayjs from 'dayjs'

export const MIN_DATE = new Date('2022-01-01')
export const TODAY = new Date()
export const WEEK = dayjs(TODAY).subtract(6, 'day').toDate()

export const formatedDate = (date: Date) => {
  return dayjs(date).format('YYYY-MM-DD')
}
