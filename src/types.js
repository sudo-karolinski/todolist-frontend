// @flow
export type Todo = {
  id: number,
  description: string,
  done: boolean
};

export interface Action<Type, Payload = empty> {
  type: Type;
  payload?: Payload;
}
