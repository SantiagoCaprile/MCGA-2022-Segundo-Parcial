import { SAVE_DATA_FULLFILLED, SAVE_DATA_LOADING, SAVE_DATA_REJECTED, DELETE_DATA } from './types';

export const saveData = (data) => {
  return {
    type: SAVE_DATA_FULLFILLED,
    payload: data,
  };
};

export const saveDataLoading  = (isLoading) => {
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



export const deleteData = (id) => {
    return {
        type: DELETE_DATA,
        payload: id
    };
}