// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModalRequestedAction } from './actions';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

type Props = {
  toggleModal: () => void
};

class AddTodoButton extends Component<Props> {
  render() {
    const { toggleModal } = this.props;
    return (
      <Fab onClick={toggleModal}>
        <AddIcon />
      </Fab>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleModal: () => {
    dispatch(toggleModalRequestedAction());
  }
});

export default connect(null, mapDispatchToProps)(AddTodoButton);
