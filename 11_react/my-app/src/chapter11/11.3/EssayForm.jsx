import { useState } from "react";

function EssayForm() {
  const [value, setValue] = useState('가장 좋아하는 것에 대한 에세이를 작성하세요.');
  // 이벤트 객체를 사용해서 가져올 수 있다.
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const handleSubmit = () => {
    alert('제출된 에세이: ' + value);
  }
  return (  
    
  <>
    <label>
      에세이:
      {/* onChange는 addEventListener같은 역할, 이벤트가 발생하는지 듣고있는 역할. 이벤트가 생기면 -> 이벤트 객체가 발생! 그리고 handleChange라는 함수 실행 */}
      <textarea value={value} onChange={handleChange} />
      {/* HTML DOM 요소에서는 텍스트를 자식으로 정의했지만 React에서는 value 속성을 사용 */}
      {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
    </label>
    <button type ="button" onClick={handleSubmit}></button>
  </>
  );
}

export default EssayForm;