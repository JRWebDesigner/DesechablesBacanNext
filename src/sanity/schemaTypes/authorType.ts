import {defineArrayMember, defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'Marca',
  title: 'Marca',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Permite recortar la imagen
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Texto alternativo para la accesibilidad.",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
