import React, { useState } from 'react'
import styles from './create.module.css'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { addProductThunk } from '../../store/products/thunks'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spinner'


const CreateProduct = () => {
    const [submited, setSubmited] = useState(false)
    const productsSelector = useSelector((state) => state.products)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(addProductThunk(data))
        setSubmited(true)
    };

    if (productsSelector.isError) {
        return (
          <div className={styles.container}>
            <span className="material-icons">warning</span>
            ERROR
          </div>
        );
      }
    if (productsSelector.isLoading) {
        return (
            <div className={styles.container}>
            <Spinner />
            </div>
        );
    }

    if (submited && productsSelector.data) {
        navigate("/products");
    }

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Create Product</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form}>
            <label className={styles.label}>Name</label>
            <input
              className={styles.input}
              type="text"
              id="name"
              {...register("name", { required: true, maxLength: 50 })}
            />
            {errors.name && errors.name.type === "required" && (
              <span className={styles.error}>This field is required</span>
            )}
            {errors.name && errors.name.type === "maxLength" && (
              <span className={styles.error}>Max length: 50 characters</span>
            )}
            <label className={styles.label}>Price</label>
            <input
              className={styles.input}
              type="number"
              id="price"
              {...register("price", { required: true, min: 0 })}
            />
            {errors.price && errors.price.type === "required" && (
              <span className={styles.error}>This field is required</span>
            )}
            {errors.price && errors.price.type === "min" && (
              <span className={styles.error}>Price can't be negative</span>
            )}
            <label className={styles.label}>Stock</label>
            <input
              className={styles.input}
              type="number"
              id="stock"
              {...register("stock", { min: 0 })}
            />
            {errors.stock && errors.stock.type === "min" && (
              <span className={styles.error}>Stock can't be negative</span>
            )}
            <label className={styles.label}>Description</label>
            <textarea
              className={styles.input}
              type="text"
              id="description"
              {...register("description", { required: true, maxLength: 100 })}
            />
            {errors.description && errors.description.type === "required" && (
              <span className={styles.error}>This field is required</span>
            )}
            {errors.description && errors.description.type === "maxLength" && (
              <span className={styles.error}>Max length: 100 characters</span>
            )}
            <label className={styles.label}>Category</label>
            <select className={styles.input} {...register("category")}>
              <option value="computers">Computers</option>
              <option value="phones">Phones</option>
              <option value="accesories">Accesories</option>
            </select>
            <button className={styles.buttons} type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    );
}

export default CreateProduct