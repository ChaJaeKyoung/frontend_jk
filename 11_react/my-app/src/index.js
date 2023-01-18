import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/JsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
// );

// 3장 예제
// root.render (
//   // <JsxUse /> // 자동완성으로 치면 import에도 자동으로 들어간다.
//   <Library />
// );

// 4장 예제
// 1초 마다 Clock 컴포넌트를 root div에 렌더링 하는 코드
setInterval(() => {
  root.render(
    <Clock />
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
