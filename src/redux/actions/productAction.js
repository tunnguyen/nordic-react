const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
const FETCH_PRODUCT = 'FETCH_PRODUCT';

export const fetchProducts = () => dispatch => {
  /*
    - fetch API => res
    - dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data
    })
   */
}

export const fetchProduct = (productId) => dispatch => {
  /*
    - fetch API => res
    - dispatch({
      type: FETCH_PRODUCT,
      payload: res.data
    })
   */ 
}