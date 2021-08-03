import { getAllPosts } from "lib/api";

export default async (req, res) => {
  console.log("=======" + Math.random());
  const posts = await getAllPosts();
  res.status(200).json({ name: "Сайн уу Нараа " + Math.random(), posts });
};
