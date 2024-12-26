import { defineType } from "sanity";

export const markType = defineType({
    name: 'mark',
    title: 'Mark',
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
        image: 'image',
        },
    },
})