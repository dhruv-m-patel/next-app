import React from 'react';
import { ListOfArticles } from '../types';
import Article from './Article';
import styles from '../styles/ArticleList.module.css';

interface ArticleListProps {
  articles: ListOfArticles;
}
export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className={styles.grid}>
      {articles.map((item) => (
        <Article key={item.id} item={item} link />
      ))}
    </div>
  );
}
