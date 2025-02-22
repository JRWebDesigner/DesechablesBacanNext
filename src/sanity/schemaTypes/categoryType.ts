import { defineType } from "sanity";

export const categoryType = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        {
        name: 'name',
        type: 'string',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
              source: 'name', // Genera el slug a partir del campo `name`
              maxLength: 200, // Longitud máxima del slug
            },
            validation: (Rule) => Rule.required(), // Asegura que el slug sea obligatorio
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
        title: 'name',
        },
    },
})