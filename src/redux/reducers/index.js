import { combineReducers } from 'redux';
import giphyReducer from './giphyReducer';
import productReducer from './productReducer';

export default combineReducers({
  giphy: giphyReducer,
  product: productReducer
})