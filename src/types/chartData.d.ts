export interface IHeartRate {
  seq: number
  member_seq: number
  avg_beat: number
  crt_ymdt: string
}

export interface IStep {
  seq: number
  member_seq: number
  steps: number
  minutes: number
  distance: number
  calorie: number
  crt_ymdt: number
}
