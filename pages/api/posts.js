import { getAllPosts } from "lib/api";

export default async (req, res) => {
  const page = parseInt(req.query.page, 10)
  const limit = parseInt(req.query.limit, 10)
  const posts = await getAllPosts(page, limit);

  console.log("=======" + Math.random() + page + ' ' + limit);
  res.status(200).json(posts);
};
