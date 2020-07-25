import { FETCH_TRENDING, GIPHY_ERROR, GIPHY_LOADING } from '../actions/giphyAction';

const initialState = {
  data: [],
  total: 0,
  error: '',
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_TRENDING:
      return {
        ...state,
        data: action.payload.data,
        total: action.payload.pagination.total_count
      }
    case GIPHY_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case GIPHY_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
}