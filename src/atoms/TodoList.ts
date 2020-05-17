import { atom } from "recoil";

export type Todo = {
  name: string;
  isDone: boolean;
};

const initialState: Todo[] = [{ name: "Going to grocery", isDone: false }];

export const todoListState = atom({
  key: "TodoListState",
  default: initialState,
});
