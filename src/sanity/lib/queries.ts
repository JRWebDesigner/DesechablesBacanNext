import { groq } from "next-sanity";

// Get all posts
export const productsQuery = groq`*[_type == "product"] {
  _id,
  name,
  slug,
  price,
  description,
  mark,
  image,
  "imageURL": image.asset->url,
  }`;

export const marksQuery= groq`*[_type == "mark"] | order(_createdAt desc) {
  _id,
  _createdAt,
  name,
  image,
  "imageURL": image.asset->url,
}`;

export const productsByMarkQuery = `*[_type == "Producto" && mark == $mark] | order(_createdAt desc) {
  _id,
  name,
  price,
  mark,
  description,
  "image": image.asset->url
}`;