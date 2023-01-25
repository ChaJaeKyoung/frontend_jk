import { useState } from "react";

function SetStateMerge(props) {
  const [result, setResult] = useState(2);

  const handleAdd = () => {
    console.log('handleAdd Start');
    // setResult(result + 5);
    setResult(result => result + 5);
    console.log('handleAdd end');
  };
  const handleSub = () => {
    console.log('handleSub Start');
    // setResult(result - 3);
    setResult(result => result - 3);
    console.log('handleSub end');
  };
  const handleMul = () => {
    console.log('handleMul Start');
    // setResult(result * 2);
    setResult(result => result * 2);
    console.log('handleMul end');
  };
  const handleDiv = () => {
    console.log('handleDiv Start');
    // setResult(result / 2);
    setResult(result => result / 2);
    console.log('handleDiv end');
  };
  const handleMixCalc = () => {
    handleAdd(); // (콜백전)2 + 5   (각각계산)     -> (콜백후) 2 + 5
    handleMul(); // (콜백전 결과)2 * 2 (각각계산)  ->  (콜백후 결과) 7 * 2 (결과값에 * 2 를 해서 결과 도출)
  };
  // set함수는 비동기로 처리됨
  // 그래서 하나의 state를 동시에 여기저기서 수정하려고 할 때 문제 발생!
  // (직전 state 결과값에다가 연산을 해버리기 때문에)
  // set함수 안에 그냥 인자값을 넣는게 아니라 콜백함수 형태로 넣어주면 해결
  // 원하는 함수의 실행결과를 저장했다가 그 다음 작업으로 연결시켜줌
  // promise then처럼 비동기함수를 동기적으로 움직이게 해준다.

  return (
    <div>
      <p>계산 결과: {result}</p>
      <button onClick={handleAdd}>+ 5</button>
      <button onClick={handleSub}>- 3</button>
      <button onClick={handleMul}>* 2</button>
      <button onClick={handleDiv}>/ 2</button>
      <button onClick={handleMixCalc}>MixCalc</button>
    </div>
  );
};

export default SetStateMerge;