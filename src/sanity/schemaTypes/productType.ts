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
        {
            name:'category',
            type: 'reference',
            to: [{ type: 'category' }],
            title: 'Category',
        },
        {
            name:'mark',
            type: 'string',
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
        media: 'image',
        },
    },
})