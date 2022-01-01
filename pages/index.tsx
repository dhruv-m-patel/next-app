import type { NextPage } from 'next';
import Header from '../components/Header';
import { ListOfArticles } from '../types';

interface HomePageProps {
  articles: ListOfArticles;
}

const Home: NextPage<HomePageProps> = ({ articles }) => {
  console.log(articles);
  return <Header title="Welcome to Next.js!" />;
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();
  return { props: { articles } };
};

export default Home;
