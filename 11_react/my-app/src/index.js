import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './chapter3/3.4/JsxUse';
import Library from './chapter3/Library';
import Clock from './chapter4/Clock';
import PropUse from './chapter5/5.3/PropUse';
import Comment from './chapter5/5.6_컴포넌트추출/Comment';
import CommentList from './chapter5/CommentList';

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
// setInterval(() => {
//   root.render(
//     <Clock />
//   );
// }, 1000);

// 5장 예제
// root.render(
//   <PropUse />
// );
// 5장 5.6 예제 데이터
// root.render(
//   // 데이터는 부모 컴포넌트에서 시작한다.
//   <Comment
//     user="Jenny"
//     text="추출용 예제 데이터: 데이터는 부모 컴포넌트에서 시작한다."
//     date="23-01-18"
//     avatarUrl="https://picsum.photos/100/100 "
//   />
// );
// 댓글예제
root.render(
  <CommentList />
);


  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
