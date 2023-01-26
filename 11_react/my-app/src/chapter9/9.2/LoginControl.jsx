import { useState } from "react";
import Greeting from "../9.1/Greeting";

// 버튼으로 로그인 로그아웃 상태 알려주는 컴포넌트

// 로그인버튼, 로그아웃버튼
// 원래는 컴포넌트로 만들어야하지만, 간단하므로 함수처럼 선언해줬다.
function LoginButton(props) {
  return(
    <button onClick={props.onClick}>
      Login
    </button>
  );
}
function LogoutButton(props) {
  return(
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 로그인 버튼을 클릭 했을 때 로그인 상태를 true로 만들 함수
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  // button 변수에 컴포넌트 대입 (결과적으로는 리엑트 엘리먼트가 저장됨)
  if (isLoggedIn) {
    // button = <LogoutButton  />;
    button = <LogoutButton onClick = {handleLogoutClick} />;
    // 클릭했을 때 넘겨줘라 -> onClick 이후 동작할 함수를 넘겨줘야 한다.
  } else {
    // button = <LoginButton  />;
    button = <LoginButton onClick = {handleLoginClick} />;
  }

  return (  
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {/* 변수에 담아놓은 버튼 엘리먼트를 렌더링 해 줌 */}
      {button}
    </div>
  );
}

export default LoginControl;