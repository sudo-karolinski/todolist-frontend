// @flow
import {
  ADD_TODO_REQUESTED,
  UPDATE_TODO_REQUESTED,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_REQUESTED,
  DELETE_TODO_SUCCESS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_REQUESTED,
  ADD_TODO_SUCCESS
} from '../constants';

import type { Todo, Action } from '../types';

const todosActions = {
  ADD_TODO_REQUESTED,
  UPDATE_TODO_REQUESTED,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_REQUESTED,
  DELETE_TODO_SUCCESS,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_REQUESTED,
  ADD_TODO_SUCCESS
};

export type TodosActionTypes = $Keys<typeof todosActions>;

export function addTodoSuccessAction(
  payload: Todo
): Action<typeof ADD_TODO_SUCCESS, Todo> {
  return {
    type: ADD_TODO_SUCCESS,
    payload
  };
}

export function fetchTodosRequestedAction(): Action<
  typeof FETCH_TODOS_REQUESTED
> {
  return {
    type: FETCH_TODOS_REQUESTED
  };
}

export function fetchTodosSuccessAction(
  payload: Todo
): Action<typeof FETCH_TODOS_SUCCESS, Todo> {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload
  };
}

export function updateTodoSuccessAction(
  payload: Todo
): Action<typeof UPDATE_TODO_SUCCESS, Todo> {
  return {
    type: UPDATE_TODO_SUCCESS,
    payload
  };
}

export function updateTodoRequestedAction(
  payload: Todo
): Action<typeof UPDATE_TODO_REQUESTED, Todo> {
  return {
    type: UPDATE_TODO_REQUESTED,
    payload
  };
}

export function deleteTodoSuccessAction(
  payload: Todo
): Action<typeof DELETE_TODO_SUCCESS, Todo> {
  return {
    type: DELETE_TODO_SUCCESS,
    payload
  };
}

export function deleteTodoRequestedAction(
  payload: Todo
): Action<typeof DELETE_TODO_REQUESTED, Todo> {
  return {
    type: DELETE_TODO_REQUESTED,
    payload
  };
}

export function addTodoRequestedAction(
  payload: Todo
): Action<typeof ADD_TODO_REQUESTED, Todo> {
  return {
    type: ADD_TODO_REQUESTED,
    payload
  };
}
