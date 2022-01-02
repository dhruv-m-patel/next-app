// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ListOfArticles, MessageResponse } from '../../../types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ListOfArticles | MessageResponse>
) {
  const articleId = Number(req.query.id);
  if (!articleId) {
    return res.status(400).send({ message: 'Post id required to fetch data' });
  }

  try {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${articleId}`
    );
    const post = await data.json();
    if (!post || !Object.keys(post).length) {
      return res.status(404).send({ message: 'Post not found' });
    }
    res.send(post);
  } catch (err) {
    res.status(500).send({ message: 'Unable to fetch post' });
  }
}
