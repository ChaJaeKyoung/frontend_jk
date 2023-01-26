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
import NotificationList from './chapter6/NotificationList';
import Counter from './chapter7/7.2/Counter';
import CounterEffect from './chapter7/7.3/CounterEffect';
import SetStateMerge from './chapter7/7.2/SetStateMerge';
import EffectSummary from './chapter7/7.3/EffectSummary';
import EffectContainer from './chapter7/7.3/EffectContainer';
import TimerContainer from './chapter7/7.3/TimerContainer';
import HeavyCalculator from './chapter7/7.4/HeavyCalculator';
import ParentComponent from './chapter7/7.5/ParentComponent';
import TextInputWithFocusButton from './chapter7/7.6/TextInputWithFocusButton';
import ComponentVariable from './chapter7/7.6/ComponentVariable';
import InputContainer from './chapter7/7.8/ex2/InputContainer';
import Accommodate from './chapter7/7.8/ex3/Accommodate';
import Toggle from './chapter8/8.1/Toggle';
import MyButton from './chapter8/8.2/MyButton';
import ConfirmButton from './chapter8/ConfirmButton';
import Greeting from './chapter9/9.1/Greeting';
import LoginControl from './chapter9/9.2/LoginControl';
import Mailbox from './chapter9/9.3/Mailbox';
import LoginControlRefactoring from './chapter9/9.3/LoginControlRefactoring';
import MainPage from './chapter9/9.4/MainPage';


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
// 실제 setInterval()을 rander에 쓰지 않고 Clock 에 넣어서 실행
// chapter6의 NotificationList.jsx 참조
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
// root.render(
//   <CommentList />
// );

// 6장 예제
// root.render(
//   <NotificationList />
// );

// 7장 예제
// 7.2-1
// root.render(
//   <Counter />
// );
// 7.2-2
// root.render(
//   <SetStateMerge />
// )

// 7.3
// root.render(
//   <CounterEffect />
// );

// root.render(
//   <EffectSummary />
// )
// root.render(
//   <EffectContainer />
// )
// root.render(
//   <TimerContainer/>
// )
// root.render (
//   <HeavyCalculator />
// )
// root.render (
//   <ParentComponent />
// )
// root.render (
//   <TextInputWithFocusButton />
// )
// root.render (
//   <ComponentVariable />
// )

// root.render (
//   <InputContainer />
// )
// root.render (
//   <Accommodate />
// )

// 8장 예제
// root.render (
//   // <Toggle />
//   // <MyButton />
//   // <ConfirmButton />
// )
// 9장 예제
const messages = ['React', 'Re: React', 'Re:Re: React', '', '(Ad) Buy one get one'];
root.render (
  // <Greeting isLoggedIn={true} />
  // <LoginControl/>
  // <Mailbox unreadMessages={messages}/>
  // <LoginControlRefactoring />
  <MainPage />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
