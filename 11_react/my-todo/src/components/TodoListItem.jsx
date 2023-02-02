import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import styled, { css } from "styled-components";

const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  /* 짝수면 even , 홀수면 odd */
  &:nth-child(even) {
    background: #f8f9fa;
  }

  /* 엘리먼트 사이사이테 테두리 넣기 */
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const Checkbox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    /* 아이콘 스타일링 */
    font-size: 1.5rem;

    /* 체크되었을 때 보여 줄 스타일 */
    color: ${props => props.checked && '#22b8cf'}
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; // 차지할 수 있는 영역 모두 차지

  /* 체크 되었을 때 보여 줄 스타일 */
  /* 조건부 스타일링 시 여러개의 css를 설정할 때는 아래 형식으로 사용 */
  ${props => props.checked && 
    css`
      color: #adb5bd;
      text-decoration: line-through;
  `}
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

// 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
// todo 객체를 props로 받아와 상태에 따라 다른 스타일의 UI를 보여줌
function TodoListItem({ todo, onRemove, onToggle }) {
  // 만약 props로 받았을 경우
  // 구조분해 할당을 한 줄에서 두번 사용함
  // const { todo: { id, text, checked } } = props;

  // todo로 먼저 한 번 구조 분해해서 받았을 경우
  // 한번 더 구조분해 할당 진행됨
  const { id, text, checked } = todo;
  return (  
    <TodoListItemWrapper>
      <Checkbox checked={checked} onClick={ () => { onToggle(id); }}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Checkbox>
      <Text checked={checked}>{text}</Text>
      <Remove onClick={() => { onRemove(id); }}>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItemWrapper>
  );
}

export default TodoListItem;