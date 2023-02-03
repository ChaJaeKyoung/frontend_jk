import React from 'react';
import styled from "styled-components";
import PostListItem from './PostListItem';

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


// map() 함수를 사용하여 PostListItem을 반복 렌더링하는 컴포넌트
function PostList(props) {
  console.log(props);
  const { posts, onClickItem } = props;
  return (
    <Wrapper>
      {/* 반복 렌더링 */}
      {posts.map((post) => {
        // map함수는 리턴된 값들을 모아서 새로운 배열을 만들기 때문에 반드시 return되어야 함.
        return (
          <PostListItem 
            key={post.id} 
            post={post} 
            onClick={() => {
              onClickItem(post); //함수 호출
            }}
          />
        );
      })}
      
    </Wrapper>
  );
}

export default PostList;