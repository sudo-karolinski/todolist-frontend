//@flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import type { Todo } from './types';
import TodoItem from './TodoItem';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {
  selectTodoRequestedAction,
  toggleDrawerRequestedAction
} from './actions';

type Props = {
  todos: Array<Todo>,
  toggleDrawer: (todo: Todo) => void
};

class TodoList extends Component<Props> {
  render() {
    const { todos, toggleDrawer } = this.props;
    return (
      <>
        <GridList cellHeight={'auto'} cols={3}>
          {todos.map((todo: Todo, index) => {
            const { description, id, done, title } = todo;
            return (
              <GridListTile
                onClick={toggleDrawer.bind(null, todo)}
                key={index}
                cols={1}
              >
                <TodoItem
                  key={index}
                  done={done}
                  title={title}
                  description={description}
                  id={id}
                />
              </GridListTile>
            );
          })}
        </GridList>
      </>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  toggleDrawer: (todo: Todo) => {
    dispatch(selectTodoRequestedAction(todo));
    dispatch(toggleDrawerRequestedAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
