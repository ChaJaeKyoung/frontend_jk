// import { useState } from "react";
import useInput from "./useInput";

function InputContainer() {
  // const [inputValue, setInputValue] = useState('');
  
  // const  handleChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // 위의 로직을 useInput hook으로 만듦 -> useInput 이용
  const [inputValue, handleChange] = useInput('');

  // input벨류를 확인버튼을 눌렀을 때 alert창에 띄우기
  const handleSubmit = () => {
    alert(inputValue);
    // setInputValue('');
  };

  return (  
    <div>
      <h1>입력 양식</h1>
      <input type="text" value={inputValue} onChange={handleChange}/>
      <button onClick={handleSubmit}>확인</button>
    </div>
  );
}

export default InputContainer;