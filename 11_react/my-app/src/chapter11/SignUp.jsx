// 사용자의 정보를 입력받는 가입 양식 컴포넌트 만들기

import { useRef } from "react";
import { useState } from "react";

// 1. 이름 입력받기
// name 이라는 state 정의
// 값이 변경되면 이를 처리하기 위한 handleChangeName() 함수 정의

// 2. 성별 입력받기
// gender라는 state 정의
// select 태그에는 총 두가지 옵션이 들어감(남자, 여자)
// 값이 변경되면 이를 처리하기 위한 handleChangeGender() 함수 정의

// 3. 출력
// 이름과 성별을 입력하고 버튼을 누를 시 alert 창으로 입력된 이름과 성별 출력하기

// 각각의 state를 따로 선언해도 되고 객체 형태로 한번에 관리해도 됨
function SignUp() {
  const [name, setName] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  
  const [gender, setGender] = useState('men');
  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = () => {
    // alert(`이름: ${name}`);
    let genderFrint = '';
    if (gender === 'men') {
      genderFrint ='남자'
    } else {
      genderFrint='여자'
    }
    alert(`이름: ${name}, 성별: ${genderFrint}`);
  };

  return (  
    <>
      <label>
        이름:
        <input 
          type="text"
          value={name} 
          onChange={handleChangeName}
        />
      </label>
      <br />
      <label>
        성별:
        <select
          value={gender}
          onChange={handleChangeGender}
        >
          <option value="men">남자</option>
          <option value="women">여자</option>
        </select>
      </label>
      <br />
      <button 
        type="button"
        onClick={handleSubmit}
      >
        가입하기
      </button>
    </>
  );
}

export default SignUp;