import { Outlet } from 'react-router-dom'
import Header from './Header'
import styles from './layout.module.scss'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <NavBar />

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
