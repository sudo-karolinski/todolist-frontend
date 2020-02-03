// @flow
import type { Todo, Action } from '../types';
import {
  FETCH_TODOS_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  ADD_TODO_SUCCESS
} from '../constants';

import type { TodosActionTypes } from '../actions/todos';

type State = Array<Todo>;

const todos = (
  state: State = [],
  action: Action<TodosActionTypes, any>
): State => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return [...action.payload];
    case UPDATE_TODO_SUCCESS:
      return state.map(todo => {
        if (action.payload.id === todo.id) {
          return { ...action.payload };
        }
        return { ...todo };
      });
    case ADD_TODO_SUCCESS:
      return [action.payload, ...state];
    case DELETE_TODO_SUCCESS:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default todos;
