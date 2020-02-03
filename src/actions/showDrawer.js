// @flow
import { TOGGLE_DRAWER_REQUESTED } from '../constants';
import { Action } from '../types';

export type ShowDrawerActionTypes = typeof TOGGLE_DRAWER_REQUESTED;

export function toggleDrawerRequestedAction(): Action<
  typeof TOGGLE_DRAWER_REQUESTED
> {
  return {
    type: TOGGLE_DRAWER_REQUESTED
  };
}
