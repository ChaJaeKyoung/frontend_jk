// use로 시작해야 react 내부적으로 hook으로 인식해서 에러를 잡아 줌
// 사용자의 온라인, 오프라인 상태를 구독하고 그 상태값을 리턴하는 함수

import { useState, useEffect } from "react";

// 컴포넌트랑 구분지어 명명 (대문자 시작x)
function useUserStatus(userId) {
  
  const [isOnline, setIsOnline] = useState(null);  

  useEffect(() => {
    function handleStatusOnline(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToUserStatus(userId, handleStatusOnline);

    return () => {
      ChatAPI.unsubscrieFromUserStatus(userId, handleStatusOnline);
    };
  }, []);

  return isOnline;
}

export default useUserStatus;