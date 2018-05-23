import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editPhoto } from '../actions';

class EditPhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.photos.title,
      url: this.props.photos.url,
      errors: {}
    }
  }

  validateForm(){
    const { title, url } = this.state;
    const values = { title, url};
    const { id } = this.props.photos;
    const errors = {};

    if(!title) {
      errors.title = 'Title should contain at lest 3 characters!'
    }
    if(!url) {
      errors.url = 'Enter valid URL'
    }
    this.setState({ errors })

    if(_.isEmpty(errors)){
      this.props.editPhoto(id, values, () => {
        this.props.data.history.push('/')
      });
    }
  }
  submitForm(e){
    e.preventDefault();
    this.validateForm();

  }
  render() {
    const { errors } = this.state;
    return (
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
}

export default connect(null, { editPhoto })(EditPhoto);
