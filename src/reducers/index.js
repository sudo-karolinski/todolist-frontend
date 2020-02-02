// @flow
import type { Todo } from '../todos';
import todosInit from '../todos';
import {
  FETCH_TODOS_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  ADD_TODO_SUCCESS
} from '../constants';

type State = Array<Todo>;

const todosActions = {
  FETCH_TODOS_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
  ADD_TODO_SUCCESS
};

export type TodosAction = $Keys<typeof todosActions>;

export interface Action<Type, Payload> {
  type: Type;
  payload: Payload;
}

const todos = (
  state: State = todosInit,
  action: Action<TodosAction, any>
): State => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return [...state];
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

export { todos };
