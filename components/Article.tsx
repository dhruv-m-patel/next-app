import React from 'react';
import { Article as ArticleType } from '../types';
import styles from '../styles/Article.module.css';

interface ArticleProps {
  item: ArticleType;
}

export default function Article({ item }: ArticleProps) {
  return (
    <div className={styles.card}>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </div>
  );
}
