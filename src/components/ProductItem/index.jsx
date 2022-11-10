import React from 'react'
import styles from './productItem.module.css'

const ProductItem = () => {
  return (
    <div className={styles.item}>
        <p>MacBook</p>
        <p>$1000</p>
        <p>5200 units</p>
        <div className={styles.options}>
            <button className={styles.buttons}>Edit</button>
            <button className={styles.buttons}>X</button>
        </div>
    </div>
  );
}

export default ProductItem