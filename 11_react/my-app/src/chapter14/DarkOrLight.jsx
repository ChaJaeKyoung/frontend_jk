import { useState } from "react";
import MainContent from "./MainContent";
import ThemeContext from "./ThemeContext";

// 쌤코드
// const themes = {
//   light: {
//     foreground: "#000"
//     background: "#eee" 
//   },
//   dark: {
//     foreground: "#fff",
//     background: "#222"
//   }
// };

function DarkOrLight() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    console.log(1);
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    }
  };

  return (  
    // ThemeContext의 값을 하위 컴포넌트들이 쓸 수 있게끔 broadcast 해 줌
    // Provider함수는 key값을 반드시 value라고 해서 넘겨줘야 한다.
    // 객체 안에 key값과 변수명이 같을 경우 그냥 넣어준다. ES6차 문법
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContent />
    </ThemeContext.Provider> 
  );
}

export default DarkOrLight;