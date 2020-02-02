// @flow
import {
  ADD_TODO_REQUESTED,
  UPDATE_TODO_REQUESTED,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_REQUESTED,
  DELETE_TODO_SUCCESS,
  ADD_TODO_SUCCESS,
  TOGGLE_MODAL_REQUESTED,
  TOGGLE_DRAWER_REQUESTED,
  SELECT_TODO_REQUESTED
} from '../constants';
import type { Todo } from '../todos';

export function addTodoSuccessAction(payload: Todo) {
  return {
    type: ADD_TODO_SUCCESS,
    payload
  };
}

export function updateTodoSuccessAction(payload: Todo) {
  return {
    type: UPDATE_TODO_SUCCESS,
    payload
  };
}

export function updateTodoRequestedAction(payload: Todo) {
  return {
    type: UPDATE_TODO_REQUESTED,
    payload
  };
}

export function deleteTodoSuccessAction(payload: Todo) {
  return {
    type: DELETE_TODO_SUCCESS,
    payload
  };
}

export function deleteTodoRequestedAction(payload: Todo) {
  return {
    type: DELETE_TODO_REQUESTED,
    payload
  };
}

export function addTodoRequestedAction(payload: Todo) {
  return {
    type: ADD_TODO_REQUESTED,
    payload
  };
}

export function toggleModalRequestedAction() {
  return {
    type: TOGGLE_MODAL_REQUESTED
  };
}

export function toggleDrawerRequestedAction() {
  return {
    type: TOGGLE_DRAWER_REQUESTED
  };
}

export function selectTodoRequestedAction(payload: Todo) {
  return {
    type: SELECT_TODO_REQUESTED,
    payload
  };
}
