// @flow

import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchTodosSuccessAction,
  updateTodoSuccessAction,
  deleteTodoSuccessAction,
  addTodoSuccessAction,
  toggleDrawerRequestedAction
} from '../actions';

import {
  ADD_TODO_REQUESTED,
  DELETE_TODO_REQUESTED,
  UPDATE_TODO_REQUESTED
} from '../constants';
import type { Todo, Action } from '../types';
import type { Saga } from '@redux-saga/core/effects';

const headers = {
  'Content-Type': 'application/json'
};

const url = '/api/todos';

export function* fetchTodos(): Saga<void> {
  try {
    const response = yield call(axios.get, url, { headers });
    yield put(fetchTodosSuccessAction(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* updateTodo(
  action: Action<typeof UPDATE_TODO_REQUESTED, Todo>
): Saga<void> {
  try {
    const { payload } = action;
    const { id } = payload;
    const response = yield call(axios.put, `${url}/${id}`, payload, {
      headers
    });
    yield put(updateTodoSuccessAction(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* deleteTodo(
  action: Action<typeof DELETE_TODO_REQUESTED, Todo>
): Saga<void> {
  try {
    const { payload } = action;
    const { id } = payload;
    yield call(axios.delete, `${url}/${id}`, { headers });
    yield put(deleteTodoSuccessAction(payload));
    yield put(toggleDrawerRequestedAction());
  } catch (error) {
    console.log(error);
  }
}

export function* addTodo(
  action: Action<typeof ADD_TODO_REQUESTED, Todo>
): Saga<void> {
  try {
    const { payload } = action;
    payload.done = false;
    const response = yield call(axios.post, url, payload, {
      headers
    });
    yield put(addTodoSuccessAction(response.data));
  } catch (error) {
    console.log(error);
  }
}
