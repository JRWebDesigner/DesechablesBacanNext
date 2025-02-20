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