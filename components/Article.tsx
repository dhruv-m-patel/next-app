import React from 'react';
import { Article as ArticleType } from '../types';

interface ArticleProps {
  item: ArticleType;
}

export default function Article({ item }: ArticleProps) {
  return <h3>{item.title}</h3>;
}
