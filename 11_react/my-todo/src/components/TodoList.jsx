import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListWrrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto; /* 높이가 최대를 넘어갈 경우 스크롤 생성 */
`;

// todos 배열을 props로 받아와서 map() 함수를 사용해 여러 개의 TodoListItem컴포넌트로 변환해 보여줌
function TodoList({ todos, onRemove, onToggle }) { // 구조 분해 할당: 어떤 형식으로 쓰든 개발자 취향, 회사의 룰에 따른다. 
  return (  
    <TodoListWrrapper>
      {/* <TodoListItem />
      <TodoListItem />
      <TodoListItem /> */}
      {todos.map((todo) => {
        {console.log(todo.id)}
        return <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />;
      })}
    </TodoListWrrapper>
  );
}

export default TodoList;