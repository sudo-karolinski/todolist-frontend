//@flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import {
  updateTodoRequestedAction,
  addTodoRequestedAction,
  toggleModalRequestedAction
} from './actions';
import { Modal, Container } from '@material-ui/core';
import type { Todo } from './types';
import './Modal.scss';

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
      <TodoForm onSubmit={updateTodo} />
    ) : (
      <TodoForm onSubmit={addTodo} />
    );

    return (
      <>
        <Modal open={showModal} onClose={toggleModal}>
          <Container>
            <div className="modalContent">{modalContent}</div>
          </Container>
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
  },
  updateTodo: (todo: Todo) => {
    dispatch(updateTodoRequestedAction(todo));
  },
  toggleModal: () => {
    dispatch(toggleModalRequestedAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalHandler);
