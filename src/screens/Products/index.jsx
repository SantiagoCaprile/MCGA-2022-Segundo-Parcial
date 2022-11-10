import React from 'react'
import styles from './products.module.css'
import ProductItem from '../../components/ProductItem'


const Products = () => {

  return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Products</h1>
                <button className={styles.buttons}>Add Product</button>
            </div>
            <div className={styles.list}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
  )
}

export default Products