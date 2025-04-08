// import ProductByMarks from "@/components/ProductByMarks";
// import { sanityFetch } from "@/sanity/lib/fetch";
// import { productsByCategoryQuery, categoryQuery, productsQuery } from "../../../sanity/lib/queries";

// export default async function ProductosMark({ params }) {
//   const { slug } = await params;
//   const decodedSlug = decodeURIComponent(slug);
  
//   // Obtener los productos por categoría
//   const productos = await sanityFetch({
//     query: productsByCategoryQuery,
//     params: { category: decodedSlug },
//   });
//   // Obtener el nombre de la categoría
//   const nombreCategoria = productos.length > 0 ? productos[0].categoryName : decodedSlug;
//   console.log('productos',
//   productos);
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6 text-center">Productos de {nombreCategoria}</h1>
//       <ProductByMarks productos={productos} category={nombreCategoria} />
//     </div>
//   );
// }

// export async function generateStaticParams() {
//   const categorias = await sanityFetch({ query: categoryQuery });
//   return categorias.map((categoria) => ({
//     slug: categoria.name,
//   }));
// }

import { groq } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/fetch";
import ProductByMarks from "@/components/ProductByMarks";

// Consulta para obtener todas las categorías
const categoryQuery = groq`*[_type == "category"] {
  _id,
  name,
  "slug": slug.current
}`;

// Consulta para obtener productos por categoría
const productsByCategoryQuery = groq`*[_type == "product" && category->slug.current == $category] {
  _id,
  name,
  price,
  xmayor,
  description,
  "categoryName": category->name,
  mark,
  "mainImage": image.asset->url,  // Campo singular
  "galleryImages": images[].asset->url  // Campo array
}`;

// Generar rutas estáticas
export async function generateStaticParams() {
  const categorias = await sanityFetch({ query: categoryQuery });

  return categorias
    .filter((categoria) => typeof categoria.slug === "string") // Filtra solo slugs válidos
    .map((categoria) => ({
      slug: categoria.slug,
    }));
}

export default async function ProductosMark({ params }) {
  const { slug } = params;

  let productos = [];
  try {
    productos = await sanityFetch({
      query: productsByCategoryQuery,
      params: { category:slug }, // Corregido: "category" en lugar de "cetegory"
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  const nombreCategoria = Array.isArray(productos) && productos.length > 0 ? productos[0].categoryName : slug;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Productos de {nombreCategoria}</h1>
      <ProductByMarks productos={productos} category={nombreCategoria} />
    </div>
  );
}
