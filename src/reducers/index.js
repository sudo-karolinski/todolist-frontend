// @flow

import todos from './todos';
import showModal from './showModal';
import showDrawer from './showDrawer';
import selectedTodo from './selectedTodo';
import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todos,
  form,
  showModal,
  showDrawer,
  selectedTodo
});

export default rootReducer;
