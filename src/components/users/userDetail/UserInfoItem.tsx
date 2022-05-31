import styles from './userInfoItem.module.scss'

interface Props {
  item: {
    title: string
    value: string | number
  }
}

const UserInfoItem = ({ item }: Props) => {
  return (
    <li className={styles.liStyle}>
      <div className={styles.item}>{item.title}</div>
      <div className={styles.data}>{item.value}</div>
    </li>
  )
}

export default UserInfoItem
