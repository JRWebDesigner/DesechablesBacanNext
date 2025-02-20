import { categoryQuery } from "@/sanity/lib/queries";
import Marks from "./Marks";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "next-sanity";

export default async function GetCategory() {
  const categorys = await sanityFetch<SanityDocument[]>({ query: categoryQuery });
  return <Marks categorys={categorys} />;
}