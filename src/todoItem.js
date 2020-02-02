// @flow
import React from 'react';
import type { Todo } from './todos';
import './TodoItem.scss';

type Props = Todo;

function TodoItem(props: Props) {
  const { description } = props;

  return (
    <div className="todoItem">
      <h1> {description} </h1>
    </div>
  );
}

export default TodoItem;
