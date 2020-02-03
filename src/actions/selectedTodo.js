// @flow
import { SELECT_TODO_REQUESTED } from '../constants';
import { Action } from '../types';
import type { Todo } from '../types';

export type SelectedTodoActionTypes = typeof SELECT_TODO_REQUESTED;

export function selectTodoRequestedAction(
  payload: Todo
): Action<typeof SELECT_TODO_REQUESTED, Todo> {
  return {
    type: SELECT_TODO_REQUESTED,
    payload
  };
}
