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

// HTML 웹 스토리지란?
// 웹 스토리지를 사용하면 웹 앱이 사용자의 브라우저 내에 로컬로 데이터를 저장할 수 있음
// 웹 스토리지는 도메인 당 사용 가능
// 같은 도메인의 모든 페이지는 동일한 데이터를 저장하고 엑세스함

// 웹 스토리지 객체
// 웹 스토리지는 데이터를 저장하기 위한 두 가지 객체를 제공
// window.localStorage - 만료 날짜 없이 데이터를 저장 
// window.sessionStorage - 한 세션에 대한 데이터 저장(브라우저 탭을 닫으면 데이터가 손실됨(=초기화))