// @flow
export type Todo = {
  id: number,
  description: string,
  status: Status
};

export type Status = 'Undone' | 'Done';

const todosInit: Array<Todo> = [
  {
    id: 1,
    description: 'This is first task which was created',
    status: 'Undone'
  },
  {
    id: 2,
    description: 'This is 2h task which was created',
    status: 'Undone'
  },
  {
    id: 3,
    description: 'This is 3th task which was created',
    status: 'Done'
  },
  {
    id: 4,
    description: 'This is 4th task which was created',
    status: 'Done'
  }
];

export default todosInit;
