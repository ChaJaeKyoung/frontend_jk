import { useCallback, useEffect, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
// import { Reset } from "styled-reset"; //첫번째 resetcss방법
import reset from "styled-reset"; // 이건 컴포넌트가 아니라 css 문자열이 통으로 와서 중괄호가 없다.
import { v4 as uuidv4 } from "uuid"; // (❁´◡`❁) uuid inport


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

  // (❁´◡`❁)
  // 로컬 스토리지에서 남아있는 객체데이터 가져오기
  // 활용 예: 장바구니, 아이디 기억하기 등
  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || [...todos];
    setTodos(dbTodos);
  }, []);

  // 기존 로컬스토리지 set함수 대신 useEffect로 빼주기
  // 로컬스토리지에 저장하기
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
      // (●'◡'●) 기존 id를 props로 받아오는 방법
      // id: nextId.current,
      // (❁´◡`❁) uuid를 사용해서 id를 받아오는 방법
      id: uuidv4(), 
      text, // key이름 : key이름 일때 key값만 보내줘도 value로 들어감
      checked: false
    };

    // 방법1) - 이전 방법 
    // const copyTodos = [...todos];
    // copyTodos.push(todo);
    // setTodos(copyTodos);

    // 방법2) - 배열의 내장 함수 이용 -> concat(): 배열을 이어붙이는 함수
    setTodos(todos.concat(todo)); // 새로운 배열 반환함

    nextId.current += 1; // nextId에 1씩 더하기

    // (❁´◡`❁) uuid 로컬 스토리지에 저장
    // set.Item, get.Item
    // setItem('이름', 들어갈 값)
    // 배열을 JSON으로 
    // localStorage.setItem('todos', JSON.stringify(todos.concat(todo)));

  }, [todos]);


  // todos 배열에서 id로 항목을 지우기 위한 handleRemove() 함수 정의
  // 불변성을 지키면서 배열의 요소를 제거해야 할 때 filter()활용
  const handleRemove = useCallback((id) => {
    // 방법1. - 이전 방법
    // const copyTodos = [...todos];
    // const targetIndex = todos.findIndex((todo) => {
    //   return todo.id === id;
    // });
    // copyTodos.splice(targetIndex, 1); 
    // setTodos(copyTodos);

    // 방법2. - 배열의 내장 함수 이용
    // filter('테스트 함수'): 기존의 배열은 변경하지 않고 특정 조건을 만족하는 요소들만 따로 추출하여 새로운 배열을 만듦
    // 테스트 함수에서는 true 또는 false를 반환해야 하며, 여기서 true를 반환하는 경우만 새로운 배열에 포함됨
    setTodos(todos.filter((todo) => todo.id !== id ));

    console.log(todos);
    // todos가 변경되어있지 않음.
    // set함수는 비동기 함수이기 때문에 localStorage에 todos를 바로 입력 할 수 없다.
    // localStorage.setItem('todos', JSON.stringify(todos)); //불가능
    // (❁´◡`❁)
    // localStorage.setItem('todos', JSON.stringify(todos.filter((todo) => todo.id !== id )));
    // 로컬스토리지에서 배열 속 아이템 하나씩 지울 때에도 filter를 사용했던 이유는 
    // JSON이 string으로 된 하나의 문자열로 이루어진 파일이기 때문이다.
    // 만약 localStorage.removeitem()을 쓴다면 보내진 배열안에 string으로 되어있는 배열문이 전부 사라짐!!
    // cf) localStorage.clear()은 로컬스토리지 전체를 다 비우는 것
  }, [todos]);

  // todos 배열의 특정 요소를 수정하기 위한 handleToggle() 함수 정의
  // 불변성을 유지하면서 배열의 특정 요소를 업데이트 해야할 때 map() 활용
  
  const handleToggle = useCallback((id) => {
    // <방법1> - 이전방법
    // const copyTodos = [...todos];
    // const target = todos.find((todo) => todo.id === id);
    // target.checked = !target.checked; // 기존 target의 checked값을 반전시켜줌
    // const targetIndex = todos.findIndex((todo) => {
    //     return todo.id === id;
    // });
    // copyTodos[targetIndex] = target; 
    // setTodos(copyTodos);

    // <방법2> = 배열의 내장 함수 사용 -> map(): 배열을 하나하나 돌면서 특정 배열당 하나하나 변화를 즘
    setTodos(
      // true: todo객체 그대로 가져와서, id값이 같은 것의 checked속성만 반전시켜서 다시 넣어줌 
      // false: todo객체 그대로 다시 넣어 줌
      todos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo )
    );  
    // (❁´◡`❁)
    // localStorage.setItem('todos', JSON.stringify(todos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo )));
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
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
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


// 2.
// HTML 웹 스토리지란?
// 웹 스토리지를 사용하면 웹 앱이 사용자의 브라우저 내에 로컬로 데이터를 저장할 수 있음 -> 크롬을 이용했으면 크롬에, edge는 edge에 저장
// 웹 스토리지는 도메인 당 사용 가능
// 같은 도메인의 모든 페이지는 동일한 데이터를 저장하고 엑세스함

// 웹 스토리지 객체
// 웹 스토리지는 데이터를 저장하기 위한 두 가지 객체를 제공
// window.localStorage - 만료 날짜 없이 데이터를 저장 
// window.sessionStorage - 한 세션에 대한 데이터 저장(브라우저 탭을 닫으면 데이터가 손실됨(=초기화))