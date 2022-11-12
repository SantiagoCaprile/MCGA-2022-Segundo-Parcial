import {
  SAVE_DATA_FULLFILLED,
  SAVE_DATA_LOADING,
  SAVE_DATA_REJECTED,
  ADD_PRODUCT_FULLFILLED,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_REJECTED,
  EDIT_PRODUCT_FULLFILLED,
  EDIT_PRODUCT_LOADING,
  EDIT_PRODUCT_REJECTED,
  DELETE_PRODUCT,
  DELETE_PRODUCT_LOADING,
  DELETE_PRODUCT_REJECTED,
} from "./types";

export const saveData = (data) => {
  return {
    type: SAVE_DATA_FULLFILLED,
    payload: data,
  };
};

export const saveDataLoading = (isLoading) => {
  return {
    type: SAVE_DATA_LOADING,
    payload: isLoading,
  };
};

export const saveDataError = () => {
  return {
    type: SAVE_DATA_REJECTED,
  };
};

export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT_FULLFILLED,
    payload: data,
  };
};

export const addProductLoading = (isLoading) => {
  return {
    type: ADD_PRODUCT_LOADING,
    payload: isLoading,
  };
};

export const addProductError = () => {
  return {
    type: ADD_PRODUCT_REJECTED,
  };
};

export const editProduct = (data) => {
    return {
        type: EDIT_PRODUCT_FULLFILLED,
        payload: data,
    };
};

export const editProductLoading = (isLoading) => {
    return {
        type: EDIT_PRODUCT_LOADING,
        payload: isLoading,
    };
};

export const editProductError = () => {
    return {
        type: EDIT_PRODUCT_REJECTED,
    };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

export const deleteProductLoading = (isLoading) => {
  return {
    type: DELETE_PRODUCT_LOADING,
    payload: isLoading,
  };
};

export const deleteProductError = () => {
  return {
    type: DELETE_PRODUCT_REJECTED,
  };
};