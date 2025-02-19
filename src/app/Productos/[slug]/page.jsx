import ProductByMarks from "@/components/ProductByMarks";
import { sanityFetch } from "@/sanity/lib/fetch";
import { productsByCategoryQuery, categoryQuery, productsQuery } from "../../../sanity/lib/queries";

export default async function ProductosMark({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  
  // Obtener los productos por categoría
  const productos = await sanityFetch({
    query: productsByCategoryQuery,
    params: { category: decodedSlug },
  });
  
  // Obtener el nombre de la categoría
  const nombreCategoria = productos.length > 0 ? productos[0].category : decodedSlug;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Productos de {nombreCategoria}</h1>
      <ProductByMarks productos={productos} marca={nombreCategoria} />
    </div>
  );
}

export async function generateStaticParams() {
  const categorias = await sanityFetch({ query: categoryQuery });
  return categorias.map((categoria) => ({
    slug: categoria.name,
  }));
}