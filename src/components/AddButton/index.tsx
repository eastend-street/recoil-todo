import React, { useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import { todoListState, Todo as TodoType } from "store/TodoList";

const AddButton: React.FC = () => {
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = () => {
    setTodoList((prevTodoList: TodoType[]) => [
      ...prevTodoList,
      {
        id: prevTodoList.length + 1,
        name: "",
        isDone: false,
      },
    ]);
  };

  return <Button onClick={addTodo}>Add Task</Button>;
};

const Button = styled.button`
  background-color: #25aaf5;
  border: none;
  color: #fff;
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s;
  }
`;

export default AddButton;
