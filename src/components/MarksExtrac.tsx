import { sanityFetch } from "@/sanity/lib/fetch"
import { categoryQuery } from "@/sanity/lib/queries"
import { SanityDocument } from "next-sanity";
import AccordionNav from "./Accordion";

export default async function Marks(){
    const categorys = await sanityFetch<SanityDocument[]>({ query: categoryQuery });
    return (
        <AccordionNav category={categorys} />
    )
}