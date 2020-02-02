// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { todos, showModal, showDrawer, selectedTodo } from './reducers';
import rootSaga from './sagas';
import { reducer as form } from 'redux-form';

const rootReducers = combineReducers({
  todos,
  form,
  showModal,
  showDrawer,
  selectedTodo
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducers,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

const root = document.getElementById('root');

if (root !== null) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
}
