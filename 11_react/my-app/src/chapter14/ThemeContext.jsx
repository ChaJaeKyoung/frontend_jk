import { createContext } from "react";

const ThemeContext = createContext('light');
// console.log(ThemeContext);
ThemeContext.displayName = 'ThemeContext'; // 리액트 개발자 도구에서 보일 컨텍스트 이름 설정 -> ThemeContext.Provider라고 나옴
// displayName설정 안해주면 context.Provider로 헷갈려짐


export default ThemeContext;