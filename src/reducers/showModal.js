// @flow
import { TOGGLE_MODAL_REQUESTED } from '../constants';

type State = boolean;

const showModal = (state: State = false, action: any) => {
  switch (action.type) {
    case TOGGLE_MODAL_REQUESTED:
      return !state;
    default:
      return state;
  }
};

export default showModal;
