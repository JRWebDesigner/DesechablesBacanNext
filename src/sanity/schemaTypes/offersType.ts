import { defineType } from "sanity";

export const offersType = defineType({
    name: 'offers',
    title: 'Offers',
    type: 'document',
    fields: [
        {
        name: 'descripcion',
        title: 'Producto en Oferta',
        type: 'string',
        },
        {
            name: 'image',
            type: 'image',
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
            },
    ],
    preview: {
        select: {
        title: 'descripcion',
        media: 'image',
        },
    },
})
