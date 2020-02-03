// @flow

import React from 'react';
import ModalHandler from './ModalHandler';
import DrawerHandler from './DrawerHandler';
import AddTodoButton from './AddTodoButton';
import { Container, Box } from '@material-ui/core';
import TodoList from './TodoList';

const Layout = () => (
  <>
    <Box>
      <h1> Todolist </h1>
      <AddTodoButton />
    </Box>
    <Container>
      <TodoList />
    </Container>
    <DrawerHandler />
    <ModalHandler />
  </>
);

export default Layout;
