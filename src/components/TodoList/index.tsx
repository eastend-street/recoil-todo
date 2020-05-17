import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { todoListState, Todo as TodoType } from "atoms/TodoList";

const TodoList: React.FC = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <Container>
      {todoList.map((todo: TodoType) => {
        return <div key={todo.id}>{todo.name}</div>;
      })}
    </Container>
  );
};

const Container = styled.div``;

export default TodoList;
