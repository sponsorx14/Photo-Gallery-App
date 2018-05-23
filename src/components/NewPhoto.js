import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { uploadPhoto } from '../actions';

const initialState = {
  title: '',
  url: '',
  errors: {}
}

class NewPhoto extends Component {
  constructor(props){
    super(props);

    this.state = initialState;
  }
  validateForm(){
    const { title, url } = this.state;
    const errors = {};

    if(!title) {
      errors.title = 'Title should contain at lest 3 characters!'
    }
    if(!url) {
      errors.url = 'Enter valid URL'
    }
    this.setState({ errors })

    if(_.isEmpty(errors)){
      this.props.uploadPhoto(this.state, () => {
        this.props.history.push('/')
      });
    }
  }
  submitForm(e){
    e.preventDefault();
    this.validateForm();
  }
  renderNewPhoto(){
    const { errors } = this.state;
    return(
      <form onSubmit={this.submitForm.bind(this)}>
        <div className='form-group'>
          <label>Description:</label>
          <input
            type="text"
            className='form-control'
            onChange={e => this.setState({ title: e.target.value})}
            value={this.state.title}
          />
          <p className='invalid-feedback'>{errors.title == '' ? '' : errors.title}</p>
        </div>
        <div className='form-group'>
          <label>Url:</label>
          <input
            type="text"
            className='form-control'
            onChange={e => this.setState({ url: e.target.value})}
            value={this.state.url}
          />
          <p className='invalid-feedback'>{errors.url == '' ? '' : errors.url}</p>
        </div>
        <Link to='/' className='btn btn-warning'>Back</Link>
        <button className='btn btn-primary'>Save</button>
      </form>
    )
  }
  render() {
    return(
      <div>
        {this.renderNewPhoto()}
      </div>
    )
  }
}

export default connect(null, { uploadPhoto })(NewPhoto);
