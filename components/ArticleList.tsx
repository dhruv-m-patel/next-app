import React from 'react';
import { ListOfArticles } from '../types';
import Article from './Article';

interface ArticleListProps {
  articles: ListOfArticles;
}
export default function ArticleList({ articles }: ArticleListProps) {
  return articles.map((item) => <Article key={item.id} item={item} />);
}
