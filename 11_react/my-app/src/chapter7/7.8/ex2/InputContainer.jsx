// import { useState } from "react";
import useInput from "./useInput";

function InputContainer() {
  // const [inputValue, setInputValue] = useState('');
  
  // const  handleChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // 위의 로직을 useInput hook으로 만듦 -> useInput 이용
  const [inputValue, handleChange, reset] = useInput('');

  // Q. input벨류를 확인버튼을 눌렀을 때 alert창에 띄우기
  // 데이터를 서버에 보내기 전 작업은 컴포넌트마다 다를 수 있기 때문에
  // reset만 공통 hook으로 만들어주고 끌어다 썼다.
  const handleSubmit = () => {
    alert(inputValue);
    // setInputValue('');
    reset();
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