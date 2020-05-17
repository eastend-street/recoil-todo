import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";

import { todoListState, Todo as TodoType } from "store/TodoList";
import Todo from "components/Todo";

const TodoList: React.FC = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <Container>
      {todoList.map((todo: TodoType) => (
        <Todo {...todo} key={todo.id} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 2rem 0;
`;

export default TodoList;
