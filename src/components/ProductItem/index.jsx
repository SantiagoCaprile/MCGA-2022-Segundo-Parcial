import React from 'react'
import styles from './productItem.module.css'

const ProductItem = () => {
  return (
    <div className={styles.item}>
        <p>MacBook</p>
        <p>$1000</p>
        <p>5200 units</p>
        <div className={styles.options}>
            <button className={styles.buttons}>
              <span class="material-icons">edit</span>
            </button>
            <button className={styles.buttons}>
              <span class="material-icons">delete</span>
            </button>
        </div>
    </div>
  );
}

export default ProductItem