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
import LandingPage from './chapter9/LandingPage';
import NumberList from './chapter10/10.1/NumberList';
import AttendanceBook from './chapter10/AttendanceBook';
import NameForm from './chapter11/11.2/NameForm';
import EssayForm from './chapter11/11.3/EssayForm';
import FlavorForm from './chapter11/11.3/FlavorForm';
import FileInput from './chapter11/11.3/FileInput';
import Reservation from './chapter11/11.4/Reservation';
import ReservationRefactoring from './chapter11/11.4/ReservationRefactoring';
import SignUp from './chapter11/SignUp';
import SignUpRefactoring from './chapter11/SignUpRefactoring';
import Calculatror from './chapter12/Calculator';
import WelcomeDialog from './chapter13/13.1.1.1/WelcomeDialog';
import SplitPaneSection from './chapter13/13.1.1.2/SplitPaneSection';
import DialogContainer from './chapter13/13.1.2/DialogContainer';
import SignUpDialog from './chapter13/13.1.3/SignUpDialog';
import ProfileCard from './chapter13/ProfileCard';
import MainContent from './chapter14/MainContent';
import DarkOrLight from './chapter14/DarkOrLight';
import StyledPage from './chapter15/StyledPage';
import Blocks from './chapter15/Blocks';
import SimpleRouter from './chapter16/SimpleRouter';
import ApiRequest from './chapter17/ApiRequest';


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
// const messages = ['React', 'Re: React', 'Re:Re: React', '', '(Ad) Buy one get one'];
// root.render (
//   // <Greeting isLoggedIn={true} />
//   // <LoginControl/>
//   // <Mailbox unreadMessages={messages}/>
//   // <LoginControlRefactoring />
//   // <MainPage />
//   // <LandingPage />
  
// )
// 10장 예제
// const numbers = [1, 2, 3, 4, 5];
// const students = [
//   {
//     id: 'a1',
//     name: '김재현',
//   },
//   {
//     id: 'a2',
//     name: '유재석',
//   },
//   {
//     id: 'a3',
//     name: '이이경',
//   },
//   {
//     id: 'a4',
//     name: '이미주',
//   },
// ]
// root.render (
//   // <NumberList numbers={numbers} />
//   // 이렇게만 보내면 key값이 없어서 warning이 뜬다
//   // Warning: Each child in a list should have a unique "key" prop.
//   // <AttendanceBook students={students}/>
// )

// // 11장 예제
// root.render (
//   // <NameForm />
//   // <EssayForm />
//   // <FlavorForm />
//   // <FileInput />
//   // <Reservation />
//   // <ReservationRefactoring />
//   // <SignUp />
//   // <SignUpRefactoring />
// )

// // 12장 예제
// root.render (
//   <Calculatror/>
// )

// 13장 예제
// root.render (
//   // <WelcomeDialog/>
//   // <SplitPaneSection />
//   // <DialogContainer />
//   // <SignUpDialog />
//   // <ProfileCard />
// )

// // 14장 예제
// root.render (
//   <DarkOrLight />
// )

// // 15 예제
// root.render (
//   // <StyledPage />
//   // <Blocks /> // flex 속성 배우기
// )

// 16 예제
// root.render (
//   // <SimpleRouter />
// )
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// 17 예제
root.render (
  <ApiRequest />
)

reportWebVitals();
