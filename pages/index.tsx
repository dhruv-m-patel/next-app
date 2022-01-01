import type { NextPage } from 'next';
import React from 'react';
import ArticleList from '../components/ArticleList';
import Header from '../components/Header';
import { ListOfArticles } from '../types';

interface HomePageProps {
  articles: ListOfArticles;
}

const Home: NextPage<HomePageProps> = ({ articles }) => {
  return (
    <React.Fragment>
      <Header title="Welcome to Next.js!" />
      <ArticleList articles={articles} />
    </React.Fragment>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();
  return { props: { articles } };
};

export default Home;
