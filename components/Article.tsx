import React from 'react';
import { Article as ArticleType } from '../types';
import styles from '../styles/Article.module.css';
import Link from 'next/link';

interface ArticleProps {
  item: ArticleType;
  link?: boolean;
}

export default function Article({ item, link = false }: ArticleProps) {
  return (
    <div className={styles.card}>
      {link ? (
        <Link href="/articles/[id]" as={`/articles/${item.id}`} passHref>
          <h2 className={styles.link}>{item.title}</h2>
        </Link>
      ) : (
        <h2>{item.title}</h2>
      )}
      <p>{item.body}</p>
    </div>
  );
}
