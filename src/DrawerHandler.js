// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { SwipeableDrawer } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import type { Todo } from './types';
import {
  deleteTodoRequestedAction,
  toggleModalRequestedAction,
  selectTodoRequestedAction,
  toggleDrawerRequestedAction
} from './actions';

type Props = {
  showDrawer: boolean,
  toggleDrawer: (todo: Todo) => void,
  toggleModal: () => void,
  deleteTodo: (todo: Todo) => void,
  selectedTodo: Todo
};

class DrawerHandler extends Component<Props> {
  render() {
    const {
      showDrawer,
      deleteTodo,
      selectedTodo,
      toggleDrawer,
      toggleModal
    } = this.props;

    return (
      <>
        <SwipeableDrawer
          open={showDrawer}
          onClose={toggleDrawer.bind(null, {})}
        >
          <List>
            <ListItem button onClick={toggleModal}>
              <ListItemText primary={'Update selected todo'} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText
                onClick={deleteTodo.bind(null, selectedTodo)}
                primary={'Remove selected todo'}
              />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary={'Mark selected as Done/Undone'} />
            </ListItem>
          </List>
        </SwipeableDrawer>
      </>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  showModal: state.showModal,
  showDrawer: state.showDrawer,
  selectedTodo: state.selectedTodo
});

const mapDispatchToProps = dispatch => ({
  deleteTodo: todo => {
    dispatch(deleteTodoRequestedAction(todo));
  },
  toggleModal: () => {
    dispatch(toggleModalRequestedAction());
  },
  toggleDrawer: (todo: Todo) => {
    dispatch(selectTodoRequestedAction(todo));
    dispatch(toggleDrawerRequestedAction());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(DrawerHandler);
