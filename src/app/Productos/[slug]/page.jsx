import ProductByMarks from "@/components/ProductByMarks";
import { sanityFetch } from "@/sanity/lib/fetch";
import { productsByMarkQuery, marksQuery, productsQuery } from "../../../sanity/lib/queries";

export default async function ProductosMark({ params }) {
  const { slug } = params;
  const marca = await sanityFetch({
    query: productsByMarkQuery,
    params: { mark: slug },
  });
  const productos= await sanityFetch({ query: productsQuery });
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Productos de {slug}</h1>
      <ProductByMarks productos={productos} marca={slug} />
    </div>
  );
}

export async function generateStaticParams() {
  const marcas = await sanityFetch({ query: marksQuery });
  return marcas.map((marca) => ({
    slug: marca.name,
  }));
}