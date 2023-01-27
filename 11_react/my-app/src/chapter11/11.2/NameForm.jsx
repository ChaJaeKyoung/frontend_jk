import { useState } from "react";

function NameForm() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    // e.target.value: 해당 타겟(<input> 테그)에 입력된 값
    setValue(e.target.value);
    // 입력값이 state를 통해 관리되는 이런 방식을 제어 컴포넌트라 부름

    // 만약 사용자가 입력한 모든 알파벳을 대문자로 변경시켜서 관리하고 싶다면?
    // 보안문자 입력 시 모두다 대문자로 변경되어 입력되는 곳 등에 쓰임
    setValue(e.target.value.toUpperCase());

  };

  const handleSubmit = (e) => {
    alert('입력한 이름: ' + value);
    // submit 이벤트는 새로고침을 동반한다.
    e.preventDefault(); // 해당 event의 기본 동작을 막음 
    // 여기서는 submit 이벤트의 기본 동작은 새로고침
    // 따라서 새로고침 발생 x
    // 실제 개발에서는 submit을 쓰지 않으니까 from도 안쓰니까 (일반 버튼에 onClick으로 하니까) 쓸일이 없을 것.
    // 그러나 e.preventDefault()를 알아두면 좋을 것 같은 예제임

  };


  return (  
    // 여기서는 기존 HTML 방식과 차이를 보이기 위해 form태그를 그대로 사용
    // <form action="url" method="GET">  // 이것도 옛날방식
    //   {/* <input type="submit" /> 이건 옛날방식*/}
    //  {/* <button type="button" onClick={handleSubmit}>제출</button> 이렇게 쓰는게 일반적 */}
    // </form>
    <form onSubmit={handleSubmit}>
      <label>
        이름: 
        {/* state에서 값을 가져다 넣어줌으로 항상 state에 들어있는 값이 input에 표시됨 */}
        <input type="text" value={value} onChange={handleChange} /> {/*이것을 제어 컴포넌트라고 부르게 된다. */}
      </label>
      <button type="submit">제출</button>
    </form>
  );
}

export default NameForm;