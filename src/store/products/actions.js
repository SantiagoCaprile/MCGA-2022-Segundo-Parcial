import {
  SAVE_DATA_FULLFILLED,
  SAVE_DATA_LOADING,
  SAVE_DATA_REJECTED,
  ADD_PRODUCT_FULLFILLED,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_REJECTED,
  DELETE_DATA,
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

export const deleteData = (id) => {
  return {
    type: DELETE_DATA,
    payload: id,
  };
};
