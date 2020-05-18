import { atom } from "recoil";

export type Todo = {
  id: number;
  name: string;
  isDone: boolean;
};

const initialState: Todo[] = [
  { id: 1, name: "Buy tomato", isDone: false },
  { id: 2, name: "Pay rent", isDone: false },
  { id: 3, name: "Clean kitchen", isDone: false },
  { id: 4, name: "Sent email to Dave", isDone: false },
  { id: 5, name: "Physics assignment", isDone: false },
];

export const todoListState = atom({
  key: "TodoListState",
  default: initialState,
});
