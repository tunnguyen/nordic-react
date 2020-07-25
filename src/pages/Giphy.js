import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import { fetchTrending } from '../redux/actions/giphyAction';
import GiphyForm from '../components/GiphyForm';
const LIMIT = 20;
const PAGES = [1, 2, 3, 4, 5];

const Giphy = ({ data = [], fetchTrending, error, loading }) => {
  // useEffect(() => {
  //   fetchTrending(LIMIT, 0);
  // }, []);

  const changePage = page => {
    const offset = LIMIT * (page - 1);
    fetchTrending(LIMIT, offset);
  }

  return (
    <div className="giphy">
      {error && <div>{ error }</div>}
      <GiphyForm/>
      {loading && <FontAwesomeIcon icon={ faTruckLoading } />}
      {!loading && <div className="giphy-list">
        {data.map((item, idx) => 
          <div key={ idx } className="giphy-item">
            <img src={ item.images.original.url } alt="img" />  
          </div>
        )}
      </div>}
      {/* <div className="pagination">
        {PAGES.map(page => 
          <button key={ page } className="pagination-item" onClick={ () => changePage(page) }>{ page }</button>  
        )}
      </div> */}
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.giphy.data,
  error: state.giphy.error,
  loading: state.giphy.loading
})

export default connect(mapStateToProps, { fetchTrending })(Giphy);