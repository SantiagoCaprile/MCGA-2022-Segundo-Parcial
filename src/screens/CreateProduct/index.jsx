import React from 'react'
import styles from './create.module.css'
import { useForm } from 'react-hook-form'


const CreateProduct = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    console.log(errors);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Create Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form}>
                    <label className={styles.label}>Name</label>
                    <input className={styles.input} type="text" {...register("name", { required: true, maxLength: 30 })} />
                    {errors.name && <span className={styles.error}>This field is required</span>}
                    <label className={styles.label}>Price</label>
                    <input className={styles.input} type="number" {...register("price", { required: true})} />
                    {errors.price && <span className={styles.error}>This field is required</span>}
                    <label className={styles.label}>Stock</label>
                    <input className={styles.input} type="number" {...register("stock", { required: true})} />
                    <label className={styles.label}>Description</label>
                    <textarea className={styles.input} type="text" {...register("description", { required: true })} />
                    {errors.description && <span className={styles.error}>This field is required</span>}
                    <label className={styles.label}>Category</label>
                    <select className={styles.input} {...register("category")}>
                        <option value="computers">Computers</option>
                        <option value="phones">Phones</option>
                        <option value="accesories">Accesories</option>
                    </select>
                    <button className={styles.buttons} type="submit">Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct