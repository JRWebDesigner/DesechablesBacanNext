import { groq } from "next-sanity";

// Get all posts
export const productsQuery = groq`*[_type == "product"] | order(_createdAt desc) {
  _id,
  name,
  price,
  description,
  "categoryName": category->name,
  mark,
  "image": image.asset->url,// Cambia de "image" a "images" (array)
  "galleryImages": coalesce(galleryImages[].asset->url, [])
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
      "image": image.asset->url,
      "descripcion": descripcion._ref
}`;
