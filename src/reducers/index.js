import { combineReducers } from 'redux';
import photoReducer from './reducer_photo';

const rootReducer = combineReducers({
  photosList: photoReducer
});

export default rootReducer;
