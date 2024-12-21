import { groq } from "next-sanity";
import { client } from "./client";

export function getProducts() {
  return `*[_type == "Producto"] | order(_createdAt desc) {
    _id,
    name,
    price,
    mark,
    description,
    "image": image.asset->url
  }`;
}