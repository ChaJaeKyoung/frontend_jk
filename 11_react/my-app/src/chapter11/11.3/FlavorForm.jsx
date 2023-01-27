  // 셀렉트 옵션에 넣어보기
  //const fruits = [
  //   {
  //     id: 'a1',
  //     name: '딸기',
  //   },
  //   {
  //     id: 'a2',
  //     name: '바나나',
  //   },
  //   {
  //     id: 'a3',
  //     name: '포도',
  //   },
  //   {
  //     id: 'a4',
  //     name: '사과',
  //   },
  // ]

import { useState } from "react";

function FlavorForm() {
  const [value, setValue] = useState('coconut');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    alert(`가장 좋아하는 맛: ${value}`);
  };

  return (  
    <>
      <label>
        좋아하는 맛 선택:
        <select value={value} onChange={handleChange}>
          {/* map함수를 사용하여 option에 새로 추가할 수 있다. */}
          {/* 예를 들어  */}
          {/* {fruits.map((fruit) => <option>{fruit.name}</option>)} */}
          <option value="grapefruit">자몽</option>
          <option value="lime">라임</option>
          <option value="coconut">코코넛</option>
          <option value="mango">망고</option>
        </select>
      </label>
      <button type="button" onClick={handleSubmit}>제출</button>
    </>
  );
}

export default FlavorForm;