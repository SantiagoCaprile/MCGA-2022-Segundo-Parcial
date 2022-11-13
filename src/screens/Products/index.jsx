import React from 'react'
import styles from './products.module.css'
import ProductItem from '../../components/ProductItem'
import Spinner from '../../components/Spinner'
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
                <Spinner />
            </div>
        )
    }

    if (productsSelector.isError) {
        return(
            <div className={styles.container}>
                <div className={styles.errorBox}>
                    <span className={styles.error + " material-icons"}>warning</span>
                    <p>No se pudieron cargar los productos correctamente. </p>
                    <p>Intentelo mas tarde</p>
                </div>
            </div>
        )
    }

  return (
        <div className={styles.container}>
            <div className={styles.content}>
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
        </div>
  )
}

export default Products