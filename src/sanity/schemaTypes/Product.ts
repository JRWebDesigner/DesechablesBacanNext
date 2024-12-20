import {defineArrayMember, defineField, defineType} from 'sanity'

export const Producto = defineType({
  name: 'Producto',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, 
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texto alternativo",
          description: "Texto alternativo para la accesibilidad.",
        },
      ],
    }),
		defineField({
      name: 'name',
      type: 'string',
    }),
		defineField({
			name: "price",
			title: "Price",
			type: "number",
			description: "Precio del nuevo producto",
			
		}),
		defineField({
      name: "mark",
      title: "Marca",
      type: "string",
      description: "Marca del nuevo producto",
    }),
    defineField({
      name: "description",
      title: "description",
      type: "text",
      description: "Descripcion del nuevo producto",
    }),
    
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})