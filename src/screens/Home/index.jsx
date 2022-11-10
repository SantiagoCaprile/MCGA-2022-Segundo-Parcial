import React from 'react'
import styles from './home.module.css'


const Home = () => {

  return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Segundo Parcial MCGA</h1>
                <h2>Santiago Caprile</h2>
            </div>
            <p>
                Tecnologias utilizadas:
                React - Redux
            </p>
        </div>
  )
}

export default Home