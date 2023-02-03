import React from 'react';
import styled from "styled-components";
import CommentListItem from './CommentListItem';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

// map() 함수를 사용하여 commentListItem을 반복 렌더링하는 컴포넌트
function CommentList(props) {
  const { comments } = props;
  return (
    <Wrapper>
      {comments.map((comment) => {
        // key값으로 comment 하나하나 분리시키는 작업
        // 하나의 코멘트를 넘겨줄 때 코멘트객체의 모든걸 다 념겨줘야 함
        return (
          <CommentListItem key={comment.id} comment={comment} />
        ); 
      })}
    </Wrapper>
  );
}

export default CommentList;