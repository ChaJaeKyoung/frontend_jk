import styled from "styled-components";
// import { MdAdd } from "react-icons/md";
import { MdAdd as AddIcon, MdOutlineInsertChart } from "react-icons/md"; // 라이브러리에서 끌어온 아이콘의 이름의 별칭을 지어줄 수 있다.
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
  transition: 0.1s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;


// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 input의 상태를 관리
function TodoInsert({ onInsert }) {
  // 제어컴포넌트
  const [value, setValue] = useState('');
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const handleSubmit = (e) => {
    onInsert(value);
    setValue(''); // value값 초기화

    // 여기까지 그냥놔두면 새로고침 되어서 날아가버린다..
    // submit 이벤트가 발생시키는 새로고침을 방지! 
    e.preventDefault();
  };

  return (  
    // form 태그 사용 시 input에서 엔터키를 눌렀을 때도 submit 이벤트 발생!
    // input하나만 있을 땐 효율적, but input이 많아지면 다르게 해야 됨
    // 일반적으로 keyup 이벤트를 통해 엔터키를 감지하는 로직을 작성
    
    // keydown : 키보드를 눌렀을 때 딱 한번
    // ---[현재 사용 X ] keypress : 계속 누르고 있을 때 
    // key up : 키보드를 땠을 때

    // event.key === 'Enter' , 
    // (event.keyCode === 13) 이렇게도 사용했었는데 디프리케이티드 됨! 엔터키가 13번인 것이 보장이 안되기 때문에  

    <TodoInserWrapper onSubmit={handleSubmit}>
      <StyledInput 
        type="text" 
        placeholder="할 일을 입력하세요." 
        value={value}
        onChange={handleChange
          // (e) => {
          // setValue(e.target.value);
          // }
        }
      />
      {/* button타입은 기본으로 submit이지만 명시적으로 적어주는 것이 좋다 */}
      <StyledButton 
        type="submit"
        // onClick={}
      >
        <AddIcon />
      </StyledButton>
    </TodoInserWrapper>
  );
}

export default TodoInsert;