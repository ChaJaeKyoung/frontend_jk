import { useCallback, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
// import { Reset } from "styled-reset"; //첫번째 resetcss방법
import reset from "styled-reset"; // 이건 컴포넌트가 아니라 css 문자열이 통으로 와서 중괄호가 없다.
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";


// 글로벌(공통) 스타일 적용 index.css에서 해도 무방하지만
// styled-components를 사용해서 적용하고 싶다면..?
// createGlobalStyle을 사용하면 컴포넌트가 만들어지고 이를 렌더링 하면 됨

const GlobalStyle = createGlobalStyle`
  /*2. reset css 적용방법 두번째 스타일 컴포넌트 안에 ${reset}을 넣어준다 */
  ${reset}
  /* 글로벌(공통) 스타일 */
  /* 이제 CSS 관련 파일(Index.css, App.css) 다 지워도 괜찮음 */
  body {
    background: #e9ecef;
  }
`;

function App() {
  console.log(reset);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '수업 교안 작성하기',
      checked: true
    },
    {
      id: 2,
      text: '시험 채점하기',
      checked: true
    },
    {
      id: 3,
      text: '단계별 실습 예제 만들기',
      checked: false
    }
  ]);

  // todos 배열에 새 객체를 추가하기 위한 handleInsert() 함수 정의
  // 새 객체를 만들 때마다 id값에 1씩 더해 주어야 하는데, useRef()를 사용하여 변수 생성
  // id값은 렌더링되는 정보가 아니기 때문에 ref사용
  // 단순히 새로운 항목을 만들 때 참조되는 값임
  const nextId = useRef(4);

  // props로 전달해야 할 함수를 만들 때는 useCallback()을 사용해본다!
  // 함수를 만들었는데 자식에게 계속 props로 전달해야 될 때에는 useCallback()을 사용하는 것이 좋다.
  // 메모리가 계속 새롭게 할당되기 때문 
  // useCallback() 미사용 시 컴포넌트가 재렌더링 될 때마다 새롭게 정의됨
  // => props로 넘겨지는 값이 바뀌므로 자식 컴포넌트가 재렌더링

  // 사용 방법: 우리가 넘겨주는 콜백함수를 useCallback으로 감싸준다고 생각하면 편함
  const handleInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text, // key이름 : key이름 일때 key값만 보내줘도 value로 들어감
      checked: false
    };

    // 방법1 - 이전 방법 
    // const copyTodos = [...todos];
    // copyTodos.push(todo);
    // setTodos(copyTodos);

    // 방법2 - 배열의 내장 함수 이용 -> concat(): 배열을 이어붙이는 함수
    setTodos(todos.concat(todo)); // 새로운 배열 반환함

    nextId.current += 1; // nextId에 1씩 더하기
  }, [todos]);

  // todos 배열에서 id로 항목을 지우기 위한 handleRemove() 함수 정의
  // 불변성을 지키면서 배열의 요소를 제거해야 할 때 filter()활용
  const handleRemove = useCallback((id) => {
    // 방법1 - 이전 방법
    const copyTodos = [...todos];
    const targetIndex = todos.findIndex((todo) => {
      return todo.id === id;
    });
    copyTodos.splice(targetIndex, 1); 
    setTodos(copyTodos);
  }, [todos]);
  return (
    <>  
    {/* 1. reset css적용방법 첫번째
      <Reset />컴포넌트를 스타일컴포넌트 위에다가 호출시켜준다.
    */}
      {/* <Reset /> */}
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert} />
        <TodoList todos={todos} onRemove={handleRemove} />
      </TodoTemplate>
    </>
  );
}

export default App;

// 1. 패키지 설치
// npm install styled-components styled-reset react-icons

// react-icons: 리액트에서 다양한 아이콘을 쓸 수 있는 라이브러리
// SVG 형태의 아이콘을 리액트 컴포넌트처럼 쉽게 사용
// 커스텀은 props 또는 CSS 스타일로 변경 가능
// package에 들어가서 깃헙에 들어가서 라이브러리 사용방법을 확인해서 사용
// https://react-icons.github.io/react-icons
