import { useEffect } from "react";

function Timer() {
  // 화면에 처음 렌더링 됐을 때 한번만 타이머 작동시킴
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('타이머 실행중..');
    }, 1000);

    // 뒷정리함수 쓰는 법 useEffect 안에서 함수를 return하면 됨
    // 언마운트 될 때 같이 종료되어야 하는 것들을 return에 넣어주면 됨
    // 화면에서 사라질 때: 만든 타이머 정리하기
    return () => {
      clearInterval(timer);
      console.log('타이머 종료!');
    };
  }, []);

  // 리엑트 엘리먼트 리턴
  // 화면에 보여 줄 것들을 나타내는 곳
  return ( 
    <div>
      <span>⏰타이머가 시작 됐습니다!</span>
    </div>
  );
}

export default Timer;