// @flow
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
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

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducers, enhancer);

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
