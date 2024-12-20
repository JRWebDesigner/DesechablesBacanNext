import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getProducts() {
  try {
    console.log("Fetching products from Sanity...");
    const products = await client.fetch(
      groq`*[_type == "Producto"] | order(order asc) {
        _id,
        "image": image.asset->url,
        name,
        description,
        price,
        }`
    );
    console.log("Products fetched:", products);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}