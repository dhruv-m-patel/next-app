import React, { useEffect } from 'react';
import { GetServerSidePropsContext, NextPage } from 'next';
// import { useRouter } from 'next/router';
import { Article as ArticleType } from '../../../types';
import ArticleComponent from '../../../components/Article';
import Link from 'next/link';
import { getEnvironmentVariables } from '../../../config/env';

interface ArticleProps {
  article?: ArticleType;
}

const Article = ({ article }: ArticleProps): NextPage<ArticleProps> => {
  // Below is how you can get query params on client side
  // const router = useRouter();
  // const { id } = router.query;
  useEffect(() => {
    if (!article || !Object.keys(article).length) {
      window.location.href = '/404';
    }
  }, [article]);

  return (
    !!article && (
      <React.Fragment>
        <ArticleComponent item={article as ArticleType} />
        <p />
        <p />
        <Link href="/">Go Back</Link>
      </React.Fragment>
    )
  );
};

// export const getStaticPaths = async () => {
//   const env = getEnvironmentVariables();
//   const res = await fetch(`${env.host}/api/posts`);
//   const articles = await res.json();
//   const ids = articles.map((item: ArticleType) => item.id);
//   const paths = ids.map((id: number) => ({
//     params: { id: id.toString() },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const env = getEnvironmentVariables();
  if (ctx?.params?.id) {
    const res = await fetch(`${env.host}/api/posts/${ctx.params.id}`);
    if (res.status === 200) {
      const article = await res.json();
      return { props: { article } };
    } else {
      return { props: {} };
    }
  }
};

export default Article;
