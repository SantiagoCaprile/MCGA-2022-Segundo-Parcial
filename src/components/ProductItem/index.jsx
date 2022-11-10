import React from 'react'
import styles from './productItem.module.css'
import { Link } from 'react-router-dom'

const ProductItem = ({product}) => {
  return (
    <div className={styles.item}>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.stock} units</p>
        <div className={styles.options}>
            <Link to={`/edit/${product._id}`} className= {styles.buttons + " material-icons"}>edit</Link>
            <button className={styles.buttons}>
              <span className="material-icons">delete</span>
            </button>
        </div>
    </div>
  );
}

export default ProductItem