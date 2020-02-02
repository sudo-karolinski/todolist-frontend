// @flow
import React from 'react';
// import type { Key } from 'react';
// import type { Todo } from './todos';

//type Props = Todo & Key;

function TodoItem(props: any) {
  const { description } = props;

  return (
    <div className="todo">
      <h1> {description} </h1>
    </div>
  );
}

export default TodoItem;
