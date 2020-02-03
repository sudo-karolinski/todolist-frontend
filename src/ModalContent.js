// @flow
import React, { Component } from 'react';

import type { Todo } from './types';
import { Divider, Container } from '@material-ui/core';
import TodoForm from './TodoForm';
import './Modal.scss';

type Props = {
  title: string,
  onSubmit: (todo: Todo) => void
};

class ModalContent extends Component<Props> {
  render() {
    const { onSubmit, title } = this.props;
    return (
      <div className="modalContent">
        <div>
          <h2> {title} </h2>
          <Divider />
        </div>
        <Container>
          <TodoForm onSubmit={onSubmit} />
        </Container>
      </div>
    );
  }
}

export default ModalContent;
