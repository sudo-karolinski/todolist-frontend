// @flow
export type Todo = {
  id: number,
  description: string,
  done: boolean
};

const todosInit: Array<Todo> = [
  {
    id: 1,
    description: 'This is first task which was created',
    done: false
  },
  {
    id: 2,
    description: 'This is 2h task which was created',
    done: false
  },
  {
    id: 3,
    description: 'This is 3th task which was created',
    done: true
  },
  {
    id: 4,
    description: 'This is 4th task which was created',
    done: true
  }
];

export default todosInit;
