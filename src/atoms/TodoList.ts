import { atom } from "recoil";

export type Todo = {
  id: number;
  name: string;
  isDone: boolean;
};

const initialState: Todo[] = [];

export const todoListState = atom({
  key: "TodoListState",
  default: initialState,
});
