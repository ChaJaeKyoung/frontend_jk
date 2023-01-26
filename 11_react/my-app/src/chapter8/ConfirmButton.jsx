import { useState } from "react";

// 사용자에게 확인을 요구하는 버튼 컴포넌트
function ConfirmButton() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  
  const handleConfirm = () => {
    setIsConfirmed( isConfirmed => !isConfirmed );
  }; 
  return ( 
    <button onClick={handleConfirm} disabled={isConfirmed}> 
      {isConfirmed ? '확인됨' : '확인하기'}
    </button>
  );

  // 함수를 만들지 않고 작동시키는 경우
  // return ( 
  //   <button onClick={() => setIsConfirmed (!isConfirmed)} disabled={isConfirmed}> 
  //     {isConfirmed ? '확인됨' : '확인하기'}
  //   </button>
  // );
}

export default ConfirmButton;

// Quiz : 버튼을 누르면 '확인하기'가 '확인됨'으로 변경되면서 버튼 비활성화 처리 해보기
// 1. 상태를 먼저 만들어 줘야한다.
// -> isConfirmed라는 state 만들기
// 2. 버튼을 클릭하면 ifConfirmed 상태를 바꾸는 handleConfirm() 이벤트 핸들러(함수) 만들기
// 조건부 렌더링으로 버튼의 내용을 '확인하기' => '확인됨' 으로 바꾸기
// disabled 속성 이용해서 버튼 비활성화