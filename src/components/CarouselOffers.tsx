import { offersQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import Offers from "@/components/offers";
import { SanityDocument } from "next-sanity";

export default async function CarouselOffers() {
    try {
        const offers = await sanityFetch<SanityDocument[]>({ query: offersQuery });
        return (
        <div>
        {offers && offers.length > 0 ? (
        <div>
            <Offers ofertas={offers} />
        </div>
        ) : (
            <section className="p-16 flex justify-center items-center flex-wrap gap-10 bg-blue-500 rounded-b-full">
            <h1 className="inline text-center text-4xl font-black text-white">Desechables Bacan: Productos de Calidad para Todas tus Necesidades</h1>
            <div className=" p-2 rounded-full flex justify-center items-center">
              <img className="desch_image w-full h-full object-contain" src="/banner.png" alt="as" />
            </div>
          </section>
        )}
    </div>
        );
    } catch (error) {
        console.error("Error in CarouselOffers function:", error);
        return (
        <div>
            <p>Error fetching offers</p>
        </div>
        );
    }
}