import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const SHOW_PHOTO = 'SHOW_PHOTO';
export const UPLOAD_PHOTO = 'UPLOAD_PHOTO';
export const EDIT_PHOTO = 'EDIT_PHOTO';
export const DELETE_PHOTO = 'DELETE_PHOTO';

const ROOT_URL = 'http://localhost:3000/photos'

export function getData(){
  const request = axios.get(ROOT_URL);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: GET_DATA, payload: data})
    })
  }
}

export function showPhoto(id){
  const request = axios.get(`${ROOT_URL}/${id}`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: SHOW_PHOTO, payload: data})
    })
  }
}

export function uploadPhoto(values, callback) {
  const request = axios.post(`${ROOT_URL}`, values);

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: UPLOAD_PHOTO, payload: data})
    })
    .then(() => callback())
  }
}

export function editPhoto(id, values, callback){
  const request = axios.put(`${ROOT_URL}/${id}`, values);

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: EDIT_PHOTO, payload: data})
    })
    .then(() => callback());
  }
}

export function deletePhoto(id, callback) {
  const request = axios.delete(`${ROOT_URL}/${id}`);

  return dispatch => {
    request.then(({ data }) => {
      dispatch({ type: DELETE_PHOTO, payload: id});
    })
    .then(() => callback())
  }
}
