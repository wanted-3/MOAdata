import { Outlet } from 'react-router-dom'
import Header from './Header'
import styles from './layout.module.scss'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <NavBar />
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
