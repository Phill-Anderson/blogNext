import { getAllPosts, getPaginatePosts } from "lib/api";

export default async (req, res) => {

  console.log(`irsen query:===========>`, req.query)
  const page = parseInt(req.query.page, 10)
  const limit = parseInt(req.query.limit, 10)

  const posts = await getPaginatePosts(page, limit);

  console.log("=======" + Math.random() + page + ' ' + limit);
  res.status(200).json(posts);
};
