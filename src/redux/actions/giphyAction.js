import axios from 'axios';
import { giphy_apis, api_key } from '../../utils/giphy';

export const FETCH_TRENDING = 'FETCH_TRENDING';
export const GIPHY_ERROR = 'GIPHY_ERROR';
export const GIPHY_LOADING = 'GIPHY_LOADING';

export const fetchTrending = (limit, offset = 0) => (dispatch) => {
  dispatch(setGiphyLoading(true));

  axios({
    method: 'get',
    url: giphy_apis.trending,
    params: {
      api_key,
      limit,
      offset
    }
  })
  .then(res => dispatch({
    type: FETCH_TRENDING,
    payload: res.data
  }))
  .catch(err => dispatch({
    type: GIPHY_ERROR,
    payload: err.response.data.message
  }))
  .finally(() => dispatch(setGiphyLoading(false)))
}

export const setGiphyLoading = bool => ({
  type: GIPHY_LOADING,
  payload: bool
})