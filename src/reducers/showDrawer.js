// @flow
import { TOGGLE_DRAWER_REQUESTED } from '../constants';
import type { ShowDrawerActionTypes } from '../actions/showDrawer';
import type { Action } from '../types';

type State = boolean;

const showDrawer = (
  state: State = false,
  action: Action<ShowDrawerActionTypes, boolean>
) => {
  switch (action.type) {
    case TOGGLE_DRAWER_REQUESTED:
      return !state;
    default:
      return state;
  }
};

export default showDrawer;
