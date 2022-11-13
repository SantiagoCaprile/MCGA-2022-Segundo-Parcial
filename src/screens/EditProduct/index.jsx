import React from "react";
import styles from "./edit.module.css";
import Spinner from "../../components/Spinner";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch  } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editProductThunk } from "../../store/products/thunks";

const EditProduct = () => {
  const productsSelector = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = productsSelector.data.filter((product) => {
    const id = window.location.pathname.split("/")[2];
    return product._id === id;
  })[0];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: product.name,
      price: product.price,
      stock: product.stock,
      description: product.description,
      category: product.category,
    },
  });

  const onSubmit = (data) => {
    data._id = product._id;
    dispatch(editProductThunk(data));
    navigate("/products");
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

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Edit Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            {...register("name", { required: true, maxLength: 30 })}
          />
          {errors.name && (
            <span className={styles.error}>This field is required</span>
          )}
          <label className={styles.label} htmlFor="price">
            Price
          </label>
          <input
            className={styles.input}
            type="number"
            id="price"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className={styles.error}>This field is required</span>
          )}
          <label className={styles.label} htmlFor="stock">
            Stock
          </label>
          <input
            className={styles.input}
            type="number"
            id="stock"
            {...register("stock", { required: true })}
          />
          <label className={styles.label} htmlFor="description">
            Description
          </label>
          <textarea
            className={styles.input}
            type="text"
            id="description"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className={styles.error}>This field is required</span>
          )}
          <label className={styles.label}>Category</label>
          <select className={styles.input} {...register("category")}>
            <option value="computers">Computers</option>
            <option value="phones">Phones</option>
            <option value="accesories">Accesories</option>
          </select>
          <button className={styles.buttons} type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
