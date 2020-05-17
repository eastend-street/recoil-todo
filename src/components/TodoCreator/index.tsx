import React, { useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import { todoListState, Todo as TodoType } from "atoms/TodoList";

const TodoCreator: React.FC = () => {
  const [todoInput, setTodoInput] = useState<string>("");
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = () => {
    setTodoList((prevTodoList: TodoType[]) => [
      ...prevTodoList,
      {
        id: prevTodoList.length + 1,
        name: todoInput,
        isDone: false,
      },
    ]);
    setTodoInput("");
  };
  return (
    <Container>
      <Input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
    </Container>
  );
};

const Container = styled.div``;

const Input = styled.input``;

export default TodoCreator;
