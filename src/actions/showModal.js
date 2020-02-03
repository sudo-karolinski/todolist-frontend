// @flow
import { TOGGLE_MODAL_REQUESTED } from '../constants';
import { Action } from '../types';

export type ShowModalActionTypes = typeof TOGGLE_MODAL_REQUESTED;

export function toggleModalRequestedAction(): Action<
  typeof TOGGLE_MODAL_REQUESTED
> {
  return {
    type: TOGGLE_MODAL_REQUESTED
  };
}
