import React from 'react'
import styles from './layout.module.css'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div>
        <nav className={styles.header} >
            <div className={styles.options}>
                <Link to={'/'} className={styles.buttons}>Home</Link>
                <Link to={'/Products'} className={styles.buttons}>Products</Link>
            </div>
        </nav>
        <div className={styles.content}>
            {children}
        </div>
        <footer className={styles.footer}>
            <p>Universidad Abierta Interamericana</p>
        </footer>
    </div>
  );
}

export default Layout