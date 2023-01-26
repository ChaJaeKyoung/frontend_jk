import { useState } from "react";
import Greeting from "../9.1/Greeting";

// 버튼으로 로그인 로그아웃 상태 알려주는 컴포넌트

// 로그인버튼, 로그아웃버튼
// 원래는 컴포넌트로 만들어야하지만, 간단하므로 함수처럼 선언해줬다.
function LoginButton(props) {
  return(
    <button onClick={props.clicked}>
      Login
    </button>
  );
}
function LogoutButton(props) {
  return(
    <button onClick={props.clicked}>
      Logout
    </button>
  );
}

function LoginControlRefactoring() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 로그인 버튼을 클릭 했을 때 로그인 상태를 true로 만들 함수
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };



  return (  
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {/* 삼항연산자로 표시 */}
      {/* 조건에 따라 각기 다른 엘리먼트를 렌더링하고 싶을 때 사용 */}
      {isLoggedIn 
        ? <LogoutButton clicked = {handleLogoutClick} />
        : <LoginButton clicked = {handleLoginClick} />
      }
    </div>
  );
}

export default LoginControlRefactoring;