// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ListOfArticles } from '../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ListOfArticles>
) {
  const limit = Number(req.query.limit || 5);
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );
  const posts = await data.json();
  res.send(posts);
}
