import styled from "styled-components";

const TodoTemplateWrapper = styled.div`
width: 512px;
margin: 0 auto;
margin-top: 6rem;
border-radius: 4px;
overflow: hidden;
`;

// 화면을 가운데 정렬하고, 앱 타이틀을 보여주는 컴포넌트
  // children으로 내부 자식 엘리먼트들을 props로 받아와서 렌더링
function TodoTemplate(props) {
  const {children} = props;  
  return (  
    <TodoTemplateWrapper>
      <div className="app-title">일정관리</div>
    </TodoTemplateWrapper>

  );
  
}

export default TodoTemplate;