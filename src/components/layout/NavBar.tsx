import { NavLink } from 'react-router-dom'
import { cx } from 'styles'
import styles from './navBar.module.scss'

const NavBar = () => {
  return (
    <aside className={styles.navBar}>
      <ul>
        <li>
          <NavLink className={({ isActive }) => cx(styles.navItem, { [styles.clicked]: isActive })} to='home'>
            백오피스 홈
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => cx(styles.navItem, { [styles.clicked]: isActive })} to='users'>
            회원관리
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default NavBar
