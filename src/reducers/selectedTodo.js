// @flow

import { SELECT_TODO_REQUESTED } from '../constants';
import type { Todo } from '../types';
import type { SelectedTodoActionTypes } from '../actions/selectedTodo';
import type { Action } from '../types';

type State = Todo;

const selectedTodo = (
  state: State = {},
  action: Action<SelectedTodoActionTypes, Todo>
) => {
  switch (action.type) {
    case SELECT_TODO_REQUESTED:
      return { ...action.payload };
    default:
      return state;
  }
};

export default selectedTodo;
