import { useRef, useState } from "react";
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
  const handleInsert = () => {};

  return (
    <>  
    {/* 1. reset css적용방법 첫번째
      <Reset />컴포넌트를 스타일컴포넌트 위에다가 호출시켜준다.
    */}
      {/* <Reset /> */}
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert}/>
        <TodoList todos={todos}/>
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
