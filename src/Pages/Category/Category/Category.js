import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';
import useTitle from '../../../hooks/useTitle';

const Category = () => {
  const categoryNews = useLoaderData();
  useTitle('Category');
  return (
    <div>
      <h2>This category has news: {categoryNews.length}</h2>
      {categoryNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Category;
