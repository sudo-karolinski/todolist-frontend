// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleModalRequestedAction } from './actions';
import { Button } from '@material-ui/core';

type Props = {
  toggleModal: () => void
};

class AddTodoButton extends Component<Props> {
  render() {
    const { toggleModal } = this.props;
    return (
      <Button onClick={toggleModal}>
        Add new todo
      </Button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleModal: () => {
    dispatch(toggleModalRequestedAction());
  }
});

export default connect(null, mapDispatchToProps)(AddTodoButton);
