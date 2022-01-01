import React from 'react';
import { GetServerSidePropsContext } from 'next';
// import { useRouter } from 'next/router';
import { Article as ArticleType } from '../../../types';
import ArticleComponent from '../../../components/Article';
import Link from 'next/link';

interface ArticleProps {
  article?: ArticleType;
}

export default function Article({ article }: ArticleProps) {
  // Below is how you can get query params on client side
  // const router = useRouter();
  // const { id } = router.query;
  if (!article) {
    return null;
  }

  return (
    <React.Fragment>
      <ArticleComponent item={article} />
      <p />
      <p />
      <Link href="/">Go Back</Link>
    </React.Fragment>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();
  const ids = articles.map((item: ArticleType) => item.id);
  const paths = ids.map((id: number) => ({
    params: { id: id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx: GetServerSidePropsContext) => {
  let article: ArticleType | undefined;
  if (ctx?.params?.id) {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`
    );
    article = await res.json();
  }

  return {
    props: { article },
  };
};
