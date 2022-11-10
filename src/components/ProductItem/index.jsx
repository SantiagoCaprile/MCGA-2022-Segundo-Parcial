import React from 'react'
import styles from './productItem.module.css'
//will receive the product as a prop

const ProductItem = ({product}) => {
  return (
    <div className={styles.item}>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.stock} units</p>
        <div className={styles.options}>
            <button className={styles.buttons}>
              <span className="material-icons">edit</span>
            </button>
            <button className={styles.buttons}>
              <span className="material-icons">delete</span>
            </button>
        </div>
    </div>
  );
}

export default ProductItem