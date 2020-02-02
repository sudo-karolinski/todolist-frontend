// @flow
import React, { Component } from 'react';
import { Modal } from '@material-ui/core';
import './App.scss';
import './Modal.scss';
import type { Todo } from './todos';
import GridList from '@material-ui/core/GridList';
import { SwipeableDrawer } from '@material-ui/core';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import TodoItem from './todoItem';
import AddTodoForm from './AddTodoForm';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {
  addTodoRequestedAction,
  toggleModalRequestedAction,
  toggleDrawerRequestedAction,
  selectTodoRequestedAction,
  updateTodoRequestedAction,
  deleteTodoRequestedAction,
  fetchTodosRequestedAction
} from './actions';

//import type { MapStateToProps, MapDispatchToProps } from 'react-redux';

type Props = {
  todos: Array<Todo>,
  selectedTodo: Todo,
  showModal: boolean,
  showDrawer: boolean,
  updateTodo: any,
  addTodo: any,
  deleteTodo: any,
  toggleModal: any,
  toggleDrawer: any,
  fetchTodos: any
};

class App extends Component<Props> {
  render() {
    const {
      todos,
      addTodo,
      updateTodo,
      showModal,
      toggleModal,
      showDrawer,
      toggleDrawer,
      selectedTodo,
      deleteTodo
    } = this.props;

    const modalContent = showDrawer ? (
      <AddTodoForm onSubmit={updateTodo} />
    ) : (
      <AddTodoForm onSubmit={addTodo} />
    );

    return (
      <>
        <Container>
          <GridList cellHeight={160} cols={3}>
            {todos.map((todo: Todo, index) => {
              const { description, id, done } = todo;
              return (
                <GridListTile
                  onClick={toggleDrawer.bind(null, todo)}
                  key={index}
                  cols={1}
                >
                  <TodoItem
                    key={index}
                    done={done}
                    description={description}
                    id={id}
                  />
                </GridListTile>
              );
            })}
          </GridList>
          <button onClick={toggleModal}>toggle</button>
        </Container>
        <Modal open={showModal} onClose={toggleModal}>
          {/* <Paper>
            <Container>
              <AddTodoForm onSubmit={addTodo} />
            </Container>
          </Paper> */}
          <div className="modalContent">{modalContent}</div>
        </Modal>
        <SwipeableDrawer
          open={showDrawer}
          onClose={toggleDrawer.bind(null, {})}
        >
          <List>
            <ListItem button onClick={toggleModal}>
              <ListItemText primary={'Update selected todo'} />
            </ListItem>
            <ListItem button>
              <ListItemText
                onClick={deleteTodo.bind(null, selectedTodo)}
                primary={'Remove selected todo'}
              />
            </ListItem>
            <ListItem button>
              <ListItemText primary={'Mark selected as Done/Undone'} />
            </ListItem>
          </List>
        </SwipeableDrawer>
      </>
    );
  }

  componentDidMount() {
    console.log('mounted');
    this.props.fetchTodos();
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  showModal: state.showModal,
  showDrawer: state.showDrawer,
  selectedTodo: state.selectedTodo
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => {
    dispatch(addTodoRequestedAction(todo));
  },
  deleteTodo: todo => {
    dispatch(deleteTodoRequestedAction(todo));
  },
  toggleModal: () => {
    dispatch(toggleModalRequestedAction());
  },
  toggleDrawer: (todo: Todo) => {
    dispatch(selectTodoRequestedAction(todo));
    dispatch(toggleDrawerRequestedAction());
  },
  updateTodo: (todo: Todo) => {
    dispatch(updateTodoRequestedAction(todo));
  },
  fetchTodos: () => {
    dispatch(fetchTodosRequestedAction());
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
