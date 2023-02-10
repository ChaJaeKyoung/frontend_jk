import React from 'react';
import { useParams } from "react-router-dom";
import Categories from '../components/Categories';

function NewsPage(props) {
  const { category } = useParams();
  return (
    <>
      <Categories />
      <NewsPage category={category || 'all'} />
    </>
  );
}


export default NewsPage;