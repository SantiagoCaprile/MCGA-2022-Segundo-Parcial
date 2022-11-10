import { SAVE_DATA_FULLFILLED, SAVE_DATA_LOADING, SAVE_DATA_REJECTED,  DELETE_DATA } from './types';

 const INITIAL_STATE = {
   data: [],
   isLoading: false,
   isError: false 
 };

 const productsReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
     case SAVE_DATA_FULLFILLED:
       return {
         ...state,
         data: action.payload,
         isError: false,
       };

      case SAVE_DATA_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        }

      case SAVE_DATA_REJECTED: 
        return {
          ...state,
          isError: true,
          isLoading: false
        }

     case DELETE_DATA:
       return {
         ...state,
         data: state.data.filter((item) => item.id !== action.payload),
       };

     default:
       return state;
   }
 };

 export default productsReducer;