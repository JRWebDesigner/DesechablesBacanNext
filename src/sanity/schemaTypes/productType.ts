import { defineType } from "sanity";

export const productType = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
        },  
        {
      name: 'image',  // ✅ Mantén el campo antiguo (para compatibilidad)
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string' }]
    },
        {
      name: 'images', // ✅ Nuevo campo (array de imágenes)
      type: 'array',
      title: 'Galería de imágenes (máx. 3)',
      validation: Rule => Rule.max(3),
      of: [{
        type: 'image',
        options: { hotspot: true },
        fields: [{ name: 'alt', type: 'string' }]
      }]
        },
        {
            name: 'category',
            type: 'reference',
            to: [{ type: 'category' }],
            title: 'Category',
        },
        {
            name: 'mark',
            type: 'string',
        },
        {
            name: 'xmayor',
            type: 'number',
        },
        {
            name: 'price',
            type: 'number',
        },
        {
            name: 'description',
            type: 'text',
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',  // Muestra la primera imagen del array en la vista previa
        },
    },
});
