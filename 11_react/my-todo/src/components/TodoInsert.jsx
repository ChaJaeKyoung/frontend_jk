import styled from "styled-components";
// import { MdAdd } from "react-icons/md";
import { MdAdd as AddIcon } from "react-icons/md"; // 라이브러리에서 끌어온 아이콘의 이름의 별칭을 지어줄 수 있다.
import { useState } from "react";
// as를 사용하여 별칭 붙여 사용하면 추후 아이콘 바꿀 때 한곳만 바꾸면 되어서 편함!

const TodoInserWrapper = styled.form`
  display: flex;
  background: #495057;
`;

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  line-height: 1.5;
  color: white;
  flex: 1; // 버튼을 제외한 영역을 모두 차지하기

  &::placeholder {
    color: #dee2e6;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 input의 상태를 관리
function TodoInsert() {
  // 제어컴포넌트
  const [value, setValue] = useState('');
  
  const handleChange = (e) => {
    return setValue(e.target.value)
  };
  return (  
    <TodoInserWrapper>
      <StyledInput 
        type="text" 
        placeholder="할 일을 입력하세요." 
        onClick={handleChange
          // (e) => {
          // setValue(e.target.value);
          // }
        }
      />
      {/* button타입은 기본으로 submit이지만 명시적으로 적어주는 것이 좋다 */}
      <StyledButton type="submit">
        <AddIcon />
      </StyledButton>
    </TodoInserWrapper>
  );
}

export default TodoInsert;