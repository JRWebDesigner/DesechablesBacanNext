import { groq } from "next-sanity";

// Get all posts
export const productsQuery = groq`*[_type == "product"] {
  _id,
  name,
  slug,
  price,
  description,
  category,
  mark,
  image,
  "imageURL": image.asset->url,
  }`;

export const categoryQuery= groq`*[_type == "category"] | order(_createdAt desc) {
  _id,
  _createdAt,
  name,
}`;

export const productsByCategoryQuery = `*[_type == "Producto" && category == $category] | order(_createdAt desc) {
  _id,
  name,
  price,
  mark,
  description,
  "image": image.asset->url
}`;