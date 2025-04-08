import { groq } from "next-sanity";

// Get all posts
export const productsQuery = groq`*[_type == "product"] | order(_createdAt desc) {
  _id,
  name,
  price,
  description,
  "categoryName": category->name,
  mark,
  "images": images[].asset->url  // Cambia de "image" a "images" (array)
}`;

export const categoryQuery= groq`*[_type == "category"] | order(_createdAt desc) {
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url
}`;

export const productsByCategoryQuery = groq`*[_type == "product" && category._ref == $category] | order(_createdAt desc) {
  _id,
  name,
  price,
  "categoryName": category->name,
  mark,
  description,
  "image": image.asset->url
}`;

export const offersQuery = groq`*[_type == "offers"] | order(_createdAt desc) {
  _id,
  descripcion,
  "image": image.asset->url
}`;
