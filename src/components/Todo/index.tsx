import React, { useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import { todoListState, Todo as TodoType } from "store/TodoList";
import { CheckFontAwesome } from "styles/FontAwesome";

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
      <CompleteButton isDone={isDone} onClick={toggleComplete}>
        <CheckFontAwesome />
      </CompleteButton>
      <Input value={todoName} onChange={(e) => editTodoName(e.target.value)} />
    </Container>
  );
};

type isDoneProps = {
  isDone: boolean;
};

const Container = styled.div`
  border-top: 0.05rem solid #e0e0e0;
  display: flex;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: rgba(196, 196, 196, 0.1);
  }

  &:focus-within {
    background-color: #fff;
  }

  &:last-child {
    border-bottom: 0.05rem solid #e0e0e0;
  }
`;

const CompleteButton = styled.button`
  background-color: ${(props: isDoneProps) =>
    props.isDone ? "#25aaf5" : "#fff"};
  color: ${(props: isDoneProps) => (props.isDone ? "#fff" : "#e0e0e0")};
  border: 0.05rem solid #e0e0e0;
  border-radius: 50%;
  font-size: 0.8rem;
  outline: none;
  padding: 0.3rem;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.3s;
  }
`;

const Input = styled.input`
  margin: 0 1rem;
  background-color: transparent;
  border: none;
  display: block;
  font-size: 1rem;
  outline: none;
  padding: 0;
  width: 100%;
`;

export default Todo;
