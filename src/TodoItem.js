// @flow
import React from 'react';
import type { Todo } from './types';
import './TodoItem.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import classNames from 'classnames/bind';

type Props = Todo;

function TodoItem(props: Props) {
  const { description, done, title } = props;

  const status = done ? 'Done' : 'Undone';

  return (
    <Card className={classNames('TodoItem', {})}>
      <CardContent>
        <h2> {`${title}(${status})`} </h2>
        <p>{description} </p>
      </CardContent>
    </Card>
  );
}

export default TodoItem;
