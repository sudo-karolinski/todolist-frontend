// @flow

import { SELECT_TODO_REQUESTED } from '../constants';
import type { Todo } from '../todos';

type State = Todo;

const selectedTodo = (state: State = {}, action: any) => {
  switch (action.type) {
    case SELECT_TODO_REQUESTED:
      return { ...action.payload };
    default:
      return state;
  }
};

export default selectedTodo;
