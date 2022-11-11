import {
    saveData,
    saveDataLoading,
    saveDataError,
    addProduct,
    addProductLoading,
    addProductError,
} from './actions'

export const saveProducts = () => async (dispatch) => {
    try {
        dispatch(saveDataLoading(true));
        const response = await fetch('https://mcga-2022-backend-tm.vercel.app/api/products');
        const productsResponse = await response.json();
        if (response.status !== 200) throw new Error('Error');
        dispatch(saveData(productsResponse));
        dispatch(saveDataLoading(false));
    } catch (error) {
        dispatch(saveDataError());
    }
}

export const addProductThunk = (product) => async (dispatch) => {
    try {
        dispatch(addProductLoading(true));
        const response = await fetch('https://mcga-2022-backend-tm.vercel.app/api/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        const productResponse = await response.json();
        if (response.status !== 200) throw new Error('Error');
        dispatch(addProduct(productResponse));
        dispatch(addProductLoading(false));
    } catch (error) {
        dispatch(addProductError());
    }
}