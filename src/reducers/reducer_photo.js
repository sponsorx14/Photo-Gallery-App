import { GET_DATA, SHOW_PHOTO, DELETE_PHOTO } from '../actions';
import _ from 'lodash';

export default function(state = {}, action){
  switch(action.type) {
    case GET_DATA:
      return _.mapKeys(action.payload, 'id');

    case SHOW_PHOTO:
      return { state, [action.payload.id]: action.payload };

    case DELETE_PHOTO:
      return _.omit(state, action.payload)
  }
  return state;
}
