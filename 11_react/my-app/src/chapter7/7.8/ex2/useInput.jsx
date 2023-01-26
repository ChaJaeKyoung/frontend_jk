import { useState } from "react";

function useInput(initialValue) {
  // 초기값을 매개변수로 받아와서 지정해줌
  const [inputValue, setInputValue] = useState(initialValue);
  
  const  handleChange = (e) => {
    setInputValue(e.target.value);
  };
  // handleSubmit도 여기에 넣어서 함수를 리턴해준다
  // const handleSubmit = () => {
  //   alert(inputValue);
  //   // setInputValue('');
  // };

  // input박스에서 reset기능만 구현
  
  const reset = () => {
    setInputValue('');
  }
  // 초기값과 handleChange 함수를 배열안에 넣어서 리턴해줌
  return [inputValue, handleChange, reset];

}

export default useInput;