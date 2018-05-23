import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import reducers from './reducers';
import Photos from './components/Photos';
import NewPhoto from './components/NewPhoto';
import ShowPhoto from './components/ShowPhoto';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/new' component={NewPhoto}/>
          <Route path='/photos/:id' component={ShowPhoto} />
          <Route path='/' component={Photos}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
