import React from 'react'
import styles from './productItem.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductThunk } from '../../store/products/thunks'

const ProductItem = ({ product }) => {
    const [deleted, setDeleted] = useState(false)
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteProductThunk(product._id))
        setDeleted(true)
    }

    if (deleted || product.isDeleted) {
        return null
    }

    return (
        <div className={styles.item}>
            <p className={styles.title}>{product.name}</p>
            <p className={styles.itemData}>{product.description}</p>
            <p className={styles.itemData}>${product.price}</p>
            <p className={styles.itemData}>{product.stock} units</p>
            <div className={styles.options}>
                <Link to={`/edit/${product._id}`} className={styles.buttons + " material-icons"}>
                    edit
                </Link>
                <button onClick={handleDelete} className={styles.buttons + " material-icons"}>
                    delete
                </button>
            </div>
        </div>
    );
}

export default ProductItem