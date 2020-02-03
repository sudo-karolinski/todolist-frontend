// @flow
import React from 'react';
import type { Todo } from './types';
import './TodoItem.scss';
import classNames from 'classnames/bind';

type Props = Todo;

function TodoItem(props: Props) {
  const { description, done, title } = props;

  const status = done ? 'Done' : 'Undone';

  return (
    <div className={classNames('TodoItem', status)}>
      <h1 className={classNames(status)}> {`${title} (${status})`} </h1>
      <p>{description} </p>
    </div>
  );
}

export default TodoItem;
