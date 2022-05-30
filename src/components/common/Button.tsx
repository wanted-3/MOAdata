import styles from './button.module.scss'
import { MouseEvent } from 'react'

interface Props {
  title: string
  onClick: (e?: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ title, onClick }: Props) => {
  const handleClick = () => {
    onClick()
  }
  return (
    <button type='button' onClick={handleClick} className={styles.button}>
      {title}
    </button>
  )
}

export default Button
