import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";

function ParentComponent () {
  const [count, setCount] = useState(0);


  // count state가 변경돼서 재렌더링 될 때마다 매번 함수가 새로 정의됨(실행이 아니라 정의!!)
  // const handleClick = () => {
  //   // 클릭 이벤트 처리
  //   setCount(count + 1);
  // };

  // useCallback() 안에 넣으면 컴포넌트가 마운트 될 때만 함수가 정의됨
  const handleClick = useCallback(() => {
    // 클릭 이벤트 처리
    // setCount(count + 1);
    setCount(count => count + 1);
  }, []); 
  

  // 새로 정의되는지 log로 확인
  // 1. useCallback 쓰기 전: handleClick이 바뀔 때마다 새로운 함수를 정의하여 사용
  // 2. useCallback 쓴 후: 버튼을 아무리 클릭해도, 함수가 정의가 또되지 않는다.
  useEffect(()=>{
    console.log('handleClick을 새롭게 정의: ', handleClick);
  }, [handleClick]);

  return ( 
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default ParentComponent ;


// 쌤 실무에서는 useCallback()은 함수를 정의하면 거의 써주셨다.
// 자식이 있는 경우는 더더욱 props로 넘어갈 때마다 새로 정의된 함수가 넘어가기 때문에 useCallback을 써줘야 함
// useMemo와 마찬가지로 무분별한 사용은 지양한다. 
