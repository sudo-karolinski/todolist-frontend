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
import type { Todo } from '../todos';

const headers = {
  'Content-Type': 'application/json'
};

const url = '/api/todos';

export function* fetchTodos() {
  try {
    const response = yield call(axios.get, url, { headers });
    yield put(fetchTodosSuccessAction(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* updateTodo(action) {
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

export function* deleteTodo(action) {
  try {
    const { payload } = action;
    const { id } = payload;
    yield call(axios.delete, `${url}/${id}`, { headers });
    yield put(deleteTodoSuccessAction(payload));
    yield put(toggleDrawerRequestedAction({}));
  } catch (error) {
    console.log(error);
  }
}

export function* addTodo(action) {
  try {
    const { payload } = action;
    const response = yield call(axios.post, url, payload, {
      headers
    });
    yield put(addTodoSuccessAction(response.data));
  } catch (error) {
    console.log(error);
  }
}
