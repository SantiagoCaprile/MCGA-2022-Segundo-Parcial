import React from 'react'
import styles from './products.module.css'
import ProductItem from '../../components/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { saveProducts } from '../../store/products/thunks'
import { Link } from 'react-router-dom'


const Products = () => {

    const productsSelector = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(saveProducts())
    }, [dispatch])

    if (productsSelector.isLoading) {
        return(
            <div className={styles.container}>
                <span className={styles.loader}></span>
            </div>
        )
    }

  return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Products</h1>
                <Link to={"/new"} className={styles.buttons}>Add Product </Link>
            </div>
            <div className={styles.list}>
                {
                productsSelector.data.map((product) => {
                    return <ProductItem product={product} key={product._id} />
                })
                }
            </div>
        </div>
  )
}

export default Products