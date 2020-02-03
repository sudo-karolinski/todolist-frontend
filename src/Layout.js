// @flow

import React from 'react';
import ModalHandler from './ModalHandler';
import DrawerHandler from './DrawerHandler';
import AddTodoButton from './AddTodoButton';
import { Container } from '@material-ui/core';
import TodoList from './TodoList';

const Layout = () => (
  <>
    <Container>
      <TodoList />
    </Container>
    <DrawerHandler />
    <ModalHandler />
    <AddTodoButton />
  </>
);

export default Layout;
