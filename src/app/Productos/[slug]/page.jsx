import ProductByMarks from "@/components/ProductByMarks";
import { sanityFetch } from "@/sanity/lib/fetch";
import { productsByCategoryQuery, categoryQuery, productsQuery } from "../../../sanity/lib/queries";

export default async function ProductosMark({ params }) {
  const { slug } = params;
  const marca = await sanityFetch({
    query: productsByCategoryQuery,
    params: { category: slug },
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
  const marcas = await sanityFetch({ query: categoryQuery });
  return marcas.map((marca) => ({
    slug: marca.name,
  }));
}