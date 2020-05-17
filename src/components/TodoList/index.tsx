import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { todoListState, Todo } from "atoms/TodoList";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <Container>
      {todoList.map((todo: Todo, index: number) => {
        return <div key={index}>{todo.name}</div>;
      })}
    </Container>
  );
};

const Container = styled.div``;

export default TodoList;
