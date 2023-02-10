import { useEffect, useState } from "react";
import styled from "styled-components";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

// 샘플용
const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160'
};

function NewsList() {
  return (
    <NewsListBlock>
      {/* sampleArticle 렌더링 해보기 */}
    </NewsListBlock>
  );
};

export default NewsList;