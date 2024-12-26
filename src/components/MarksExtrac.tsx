import { sanityFetch } from "@/sanity/lib/fetch"
import { marksQuery } from "@/sanity/lib/queries"
import { SanityDocument } from "next-sanity";
import AccordionNav from "./Accordion";

export default async function Marks(){
    const marks = await sanityFetch<SanityDocument[]>({ query: marksQuery });
    return (
        <AccordionNav marcas={marks} />
    )
}