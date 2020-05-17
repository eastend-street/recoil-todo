import React, { useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import { todoListState, Todo as TodoType } from "store/TodoList";

const Todo: React.FC<TodoType> = ({ id, name, isDone }) => {
  const [todoName, setTodoName] = useState<string>(name);
  const setTodoList = useSetRecoilState(todoListState);

  const editTodoName = (input: string) => {
    setTodoName(input);

    setTodoList((prevTodoList: TodoType[]) => {
      return prevTodoList.map((todo) =>
        todo.id === id ? { ...todo, name: todoName } : todo
      );
    });
  };

  const toggleComplete = () => {
    setTodoList((prevTodoList: TodoType[]) => {
      return prevTodoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      );
    });
  };

  return (
    <Container>
      <CompleteButton isDone={isDone} onClick={toggleComplete}></CompleteButton>
      <Input value={todoName} onChange={(e) => editTodoName(e.target.value)} />
    </Container>
  );
};

const Container = styled.div`
  border-top: 0.05rem solid #e0e0e0;
  display: flex;
  padding: 0.5rem 0;

  &:last-child {
    border-bottom: 0.05rem solid #e0e0e0;
  }
`;

type CompleteButtonProps = {
  isDone: boolean;
};

const CompleteButton = styled.button`
  background-color: ${(props: CompleteButtonProps) =>
    props.isDone ? "#25aaf5" : "#fff"};
  border: 0.05rem solid #e0e0e0;
  border-radius: 50%;
  font-size: 1rem;
  outline: none;
  padding: 0.7rem;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s;
  }
`;

const Input = styled.input`
  margin: 0 1rem;
  border: none;
  display: block;
  font-size: 1rem;
  outline: none;
  padding: 0;
  width: 100%;
`;

export default Todo;
