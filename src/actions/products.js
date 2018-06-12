import * as ProductActionTypes from '../actiontypes/products';

export const addProduct = product => {
    return {
        type:ProductActionTypes.ADD_PRODUCT,
        product
    };
} ;
export const getProduct = (index) => {
    return {
        type:ProductActionTypes.GET_PRODUCT,
        index
    };
} ;

export const removeProduct = index=>{
   return {
        type:ProductActionTypes.REMOVE_PRODUCT,
        index
    };
};
export const updateProduct = (index,product)=>{
   return {
        type:ProductActionTypes.EDIT_PRODUCT,
        index,
        product
    };
};