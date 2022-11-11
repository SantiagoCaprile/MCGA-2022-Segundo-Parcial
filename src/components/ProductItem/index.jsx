import React from 'react'
import styles from './productItem.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ProductItem = ({ product }) => {
    const [deleted, setDeleted] = useState(false)

    const handleDelete = () => {
        setDeleted(!deleted)
        //delete product from db using thunk and id
    }

    if (deleted || product.isDeleted) {
        return (
            <div className={[styles.item, styles.deleted].join(" ")}>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.stock} units</p>
                <div className={styles.options}>
                    <Link to={`/edit/${product._id}`} className={styles.buttons + " material-icons"}>
                        edit
                    </Link>
                    <button onClick={handleDelete} className={styles.buttons + " material-icons"}>
                        restart_alt
                    </button>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.item}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.stock} units</p>
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