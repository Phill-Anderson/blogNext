import client, { previewClient } from "lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

export const getPaginatePosts = async (page, limit = 3) => {
  const posts = await client.fetch(
    `*[_type=="blog"]{_createdAt, title, subtitle, 'category':category->{ title, 'picture':picture.asset->url }, date, content[]{...,'asset': asset->}, 'image': cover_image.asset->url, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url }}|order(date desc)[${page * limit}...${(page + 1) * limit}]`
  );
  return posts;
};
export const getAllPosts = async () => {
  const posts = await client.fetch(
    `*[_type=="blog"]{_createdAt, title, subtitle, date, 'image': cover_image.asset->url, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url }}|order(date desc)`
  );
  return posts;
};

export const getPaginateCategoryPosts = async (category, page, limit = 3) => {
  const posts = await client.fetch(
    `*[_type == "blog" && category._ref in *[_type=="category" && title==${category}]._id ]{_createdAt, title, subtitle, 'category':category->{ title, 'picture':picture.asset->url }, date, content[]{...,'asset': asset->}, 'image': cover_image.asset->url, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url }}|order(date desc)[${page * limit}...${(page + 1) * limit}]`
  );
  return posts;
};

export const getPostBySlug = async (slug, preview = false) => {
  let myClient = preview ? previewClient : client;
  const post = await myClient.fetch(
    `*[_type=="blog" && slug.current==$slug]{_createdAt, title, subtitle, date, content[]{...,'asset': asset->} , cover_image, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url,  }}`,
    { slug }
  );
  return post;
};

export const getAllCategories = async () => {
  const posts = await client.fetch(
    `*[_type=="category"]{_createdAt, title, date, 'image': picture.asset->url}|order(date desc)`
  );
  return posts;
};