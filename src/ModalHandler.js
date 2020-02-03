//@flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateTodoRequestedAction,
  addTodoRequestedAction,
  toggleModalRequestedAction
} from './actions';
import { Modal } from '@material-ui/core';
import type { Todo } from './types';
import ModalContent from './ModalContent';

type Props = {
  addTodo: (todo: Todo) => void,
  updateTodo: (todo: Todo) => void,
  toggleModal: () => void,
  showDrawer: boolean,
  showModal: boolean
};

class ModalHandler extends Component<Props> {
  render() {
    const {
      showDrawer,
      showModal,
      updateTodo,
      addTodo,
      toggleModal
    } = this.props;

    const modalContent = showDrawer ? (
      <ModalContent onSubmit={updateTodo} title={'Update selected todo'} />
    ) : (
      <ModalContent onSubmit={addTodo} title={'Add new todo'} />
    );

    return (
      <>
        <Modal open={showModal} onClose={toggleModal}>
          {modalContent}
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({
  showModal: state.showModal,
  showDrawer: state.showDrawer
});

const mapDispatchToProps = dispatch => ({
  addTodo: (todo: Todo) => {
    dispatch(addTodoRequestedAction(todo));
    dispatch(toggleModalRequestedAction());
  },
  updateTodo: (todo: Todo) => {
    dispatch(updateTodoRequestedAction(todo));
    dispatch(toggleModalRequestedAction());
  },
  toggleModal: () => {
    dispatch(toggleModalRequestedAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalHandler);
