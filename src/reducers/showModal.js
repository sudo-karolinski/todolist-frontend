// @flow
import { TOGGLE_MODAL_REQUESTED } from '../constants';
import type { ShowModalActionTypes } from '../actions/showModal';
import type { Action } from '../types';

type State = boolean;

const showModal = (
  state: State = false,
  action: Action<ShowModalActionTypes, boolean>
): boolean => {
  switch (action.type) {
    case TOGGLE_MODAL_REQUESTED:
      return !state;
    default:
      return state;
  }
};

export default showModal;
