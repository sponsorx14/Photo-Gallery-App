import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showPhoto, deletePhoto } from '../actions'
import EditPhoto from './EditPhoto';


class ShowPhoto extends Component {
  constructor(props){
    super(props);

    this.state = {
      editing: false
    }
  }

  componentDidMount(){
    if(!this.props.photos) {
      const { id } = this.props.match.params;
      this.props.showPhoto(id)
    }
  }

  deletePhoto(){
    const { id } = this.props.match.params;
    this.props.deletePhoto(id, () => {
      this.props.history.push('/');
    })
  }

  renderEdit(){
    return <EditPhoto photos={this.props.photos} data={this.props}/>
  }

  renderDetails(){
    const { photos } = this.props;
      return (
        <div key={photos.id}>
          <Link to='/' className='btn btn-primary'>Back</Link>
          <button className='btn btn-warning' onClick={() => this.setState({editing: true})}>Edit User</button>
          <button className='btn btn-danger pull-xs-right' onClick={this.deletePhoto.bind(this)}>Delete</button>
          <h2 className='photo-title'>{photos.title}</h2>
          <img src={photos.url} alt=""/>
        </div>
      );
  }
  render() {
    const { editing } = this.state;

    if(!this.props.photos) {
      return <div></div>
    }
    return (
      <div>
        { editing ? this.renderEdit() : this.renderDetails()}
      </div>
    )
  }
}

function mapStateToProps({ photosList }, ownProps) {
  return { photos: photosList[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { showPhoto, deletePhoto })(ShowPhoto);
