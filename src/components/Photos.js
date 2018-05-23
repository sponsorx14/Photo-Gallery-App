import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../actions';

class Photos extends Component {
  componentDidMount(){
    this.props.getData();
  }

  renderPhotos(){
    return _.map(this.props.photos, photo => {
      return (
        <Link key={`${photo.id}`} to={`/photos/${photo.id}`} className='row'>
          <img src={photo.url} alt="" className='photo-image'/>
          <h3 className='photo-text'>{photo.title}</h3>
        </Link>
      )
    })
  }
  render(){
    return (
      <div>
        <Link to='/new' className='btn btn-primary pull-xs-right'>New photo</Link>
        <h2>List of photos:</h2>
        {this.renderPhotos()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { photos: state.photosList }
}

export default connect(mapStateToProps, { getData })(Photos);
