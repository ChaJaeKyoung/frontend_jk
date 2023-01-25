import { useState } from "react";
import Timer from "./Timer";

function TimerContainer() {
  // react snippets extention설치 후 usf 엔터
  // 변수명 입력 후 tab누르면 자동으로 함수명쪽이 카멜케이스로 변경되면서 초기값 괄호 안으로 커서가 움직임
  const [showTimer, setShowTimer] = useState(false);
  return ( 
    <div>
      {showTimer && <Timer />}
      <button
        onClick={() => setShowTimer(!showTimer)}
      >
        on/off 토글
      </button>
    </div>
  );
}

export default TimerContainer;