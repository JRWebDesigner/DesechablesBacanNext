import { defineType } from "sanity";

export const offersType = defineType({
    name: 'offers',
    title: 'Offers',
    type: 'document',
    fields: [
        {
        name: 'descripcion',
        type: 'reference',
         to: [{ type: 'product' }],
         validation: Rule => Rule.required()
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
        media: 'image',
        },
    },
})
