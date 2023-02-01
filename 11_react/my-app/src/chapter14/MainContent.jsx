import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent() {
  // Consumer대신에 간단하게 useContext Hook을 사용해서 
  // 구조분해 할당으로 값을 가져온다.
  // 함수 컴포넌트에서만 hook을 사용할 수 있다.
  // 클래스 컴포넌트는 Consumer로 사용해야 함.
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (  
    <div
      style={{
        width: '100vw',
        height: '100vh',
        padding: '1.5rem',
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white'
      }}
    >
      <p>테마 변경이 가능한 웹사이트 입니다.</p>
      <button type="button" onClick={toggleTheme}>테마 변경</button>
    </div>
  );
}

export default MainContent;