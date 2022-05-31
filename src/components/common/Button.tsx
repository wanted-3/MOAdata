import { MouseEvent } from 'react'
import { cx } from 'styles'
import styles from './button.module.scss'

interface Props {
  title: string
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  size: string
  value?: number
}

const Button = ({ title, onClick, size, value }: Props) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick(e)
  }
  return (
    <button type='button' value={value} onClick={handleClick} className={cx(styles.button, styles[size])}>
      {title}
    </button>
  )
}

export default Button
