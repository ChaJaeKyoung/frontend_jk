import React from 'react';
import { useParams } from "react-router-dom";

import Categories from '../components/Categories';
import NewsList from '../../../my-news-app/src/components/NewsList';

function NewsPage(props) {
  const { category } = useParams();
  return (
    <>
      <Categories />
      <NewsList category={category || 'all'} />
    </>
  );
}


export default NewsPage;