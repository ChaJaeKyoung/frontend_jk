import { useState } from "react";

function useInput(initialValue) {
  // 초기값을 매개변수로 받아와서 지정해줌
  const [inputValue, setInputValue] = useState(initialValue);
  
  const  handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // 초기값과 handleChange 함수를 배열안에 넣어서 리턴해줌
  return [inputValue, handleChange];

}

export default useInput;