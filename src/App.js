// @flow
import React, { Component } from 'react';
import './App.scss';
import type { Todo } from './todos';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import TodoItem from './todoItem';

//import type { MapStateToProps, MapDispatchToProps } from 'react-redux';

type Props = {
  todos: Array<Todo>
};

class App extends Component<Props> {
  render() {
    const { todos } = this.props;

    return (
      <Container>
        <GridList cellHeight={160} cols={3}>
          {todos.map((todo: Todo, index) => {
            const { description, id, status } = todo;
            return (
              <GridListTile key={index} cols={1}>
                <TodoItem
                  key={index}
                  status={status}
                  description={description}
                  id={id}
                />
              </GridListTile>
            );
          })}
        </GridList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, null)(App);
