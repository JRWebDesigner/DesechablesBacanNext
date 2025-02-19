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
    ],
    preview: {
        select: {
        title: 'name',
        },
    },
})