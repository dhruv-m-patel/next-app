import type { NextPage } from 'next';
import React from 'react';
import ArticleList from '../components/ArticleList';
import Header from '../components/Header';
import { ListOfArticles } from '../types';
import { getEnvironmentVariables } from '../config/env';

interface HomePageProps {
  articles: ListOfArticles;
}

const Home: NextPage<HomePageProps> = ({ articles }) => {
  return (
    <React.Fragment>
      <Header title="Welcome Home!" />
      <ArticleList articles={articles} />
    </React.Fragment>
  );
};

export const getStaticProps = async () => {
  const env = getEnvironmentVariables();
  const res = await fetch(`${env.host}/api/posts?limit=6`);
  const articles = await res.json();
  return { props: { articles } };
};

export default Home;
