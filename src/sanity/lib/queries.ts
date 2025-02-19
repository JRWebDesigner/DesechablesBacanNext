import { groq } from "next-sanity";

// Get all posts
export const productsQuery = groq`*[_type == "product"] {
  _id,
  name,
  price,
  description,
  category,
  mark,
  "image": image.asset->url
  }`;

export const categoryQuery= groq`*[_type == "category"] | order(_createdAt desc) {
  _id,
  _createdAt,
  name,
}`;

export const productsByCategoryQuery = `*[_type == "product" && category == $category] | order(_createdAt desc) {
  _id,
  name,
  price,
  category,
  mark,
  description,
  "image": image.asset->url
}`;

export const offersQuery = groq`*[_type == "offers"] | order(_createdAt desc) {
  _id,
  descripcion,
  "image": image.asset->url
}`;