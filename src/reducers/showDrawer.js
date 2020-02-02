// @flow
import { TOGGLE_DRAWER_REQUESTED } from '../constants';

type State = boolean;

const showDrawer = (state: State = false, action: any) => {
  switch (action.type) {
    case TOGGLE_DRAWER_REQUESTED:
      return !state;
    default:
      return state;
  }
};

export default showDrawer;
