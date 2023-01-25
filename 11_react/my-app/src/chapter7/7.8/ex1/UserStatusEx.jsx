import { useEffect, useInsertionEffect } from "react";

function UserStatusEx(props) {
  // const [isOnline, setIsOnline] = useState(null);  

  useEffect(() => {
    function handleStatusOnline(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToUserStatus(props.user.id, handleStatusOnline);

    return () => {
      ChatAPI.unsubscrieFromUserStatus(props.user.id, handleStatusOnline);
    };
  }, []);

  // 중복되는 코드를 추출하여 커스텀 훅으로 만들기
  // 여러 개의 함수 컴포넌트에서 하나의 로직을 공유하도록 하고 싶을 때 새로운 함수(=훅)를 하나 만든다.
  // 커스텀훅들은 이름이 use로 시작하고, 내부에서 다른 훅을 사용해서 만드는 하나의 자바스크립트 함수

  const isOnline = useUserStatus(props.user.id);
  
  // 화면에 보여질 react element 컴포넌트 리턴
  if (isOnline === null) {
    return 'Loading...';
  }
  return (
    isOnline ? 'Online' : 'Offline'
  ); 
  
}


export default UserStatusEx;