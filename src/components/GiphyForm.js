import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchTrending } from '../redux/actions/giphyAction';
import TextInput from './Forms/TextInput';

const GiphyForm = ({ fetchTrending, loading }) => {
  const [amount, setAmount] = useState(0);
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    email: '',
    phone: ''
  })

  const onFetchTrending = () => {
    if (loading) return;
    // validate
    fetchTrending(amount, 0);
  }

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  console.log(formData);

  return (
    <>
      <div className="giphy-form">
        <div className="form-group">
          <TextInput
            label="Amount"
            name="amount"
            onChange={ e => setAmount(e.target.value) }
          />
        </div>
        <div className="form-group">
          <button className="button" onClick={ onFetchTrending }>Fetch Trending</button>
        </div>
      </div>
      <div className="register-form">
        <TextInput
          label="User name"
          name="userName"
          onChange={ onChange }
        />
        <TextInput
          label="Password"
          name="password"
          onChange={ onChange }
        />
        <TextInput
          label="Email"
          name="email"
          onChange={ onChange }
        />
        <TextInput
          label="Phone"
          name="phone"
          onChange={ onChange }
        />
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  loading: state.giphy.loading
})

export default connect(mapStateToProps, { fetchTrending })(GiphyForm);