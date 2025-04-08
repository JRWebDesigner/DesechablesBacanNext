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
            name: 'image',  // Cambiado de 'image' a 'images' (array)
            type: 'array',
            title: 'Image',
            validation: Rule => Rule.max(3).error('Máximo 3 imágenes por producto'), // Límite de 3 imágenes
            of: [{
                type: 'images',
                options: {
                    hotspot: true,
                },
                fields: [
                    {
                        name: 'alt',
                        type: 'string',
                        title: 'Alternative text',
                    }
                ]
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
            media: 'image.0',  // Muestra la primera imagen del array en la vista previa
        },
    },
});
