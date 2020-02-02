import { takeEvery, all } from '@redux-saga/core/effects';
import {
  FETCH_TODOS_REQUESTED,
  DELETE_TODO_REQUESTED,
  UPDATE_TODO_REQUESTED,
  ADD_TODO_REQUESTED
} from '../constants';
import { fetchTodos, deleteTodo, updateTodo, addTodo } from './todos';

export default function* rootSaga() {
  yield all([
    takeEvery(FETCH_TODOS_REQUESTED, fetchTodos),
    takeEvery(DELETE_TODO_REQUESTED, deleteTodo),
    takeEvery(UPDATE_TODO_REQUESTED, updateTodo),
    takeEvery(ADD_TODO_REQUESTED, addTodo)
  ]);
}
