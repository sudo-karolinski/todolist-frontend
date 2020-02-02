// @flow
import { takeEvery, all } from '@redux-saga/core/effects';
import { FETCH_TODOS_REQUESTED } from '../constants';
import incrementCounter from './incrementCounter';
import type { Saga } from 'redux-saga';

export default function* rootSaga(): Saga<void> {
  yield all([takeEvery(FETCH_TODOS_REQUESTED, incrementCounter)]);
}
