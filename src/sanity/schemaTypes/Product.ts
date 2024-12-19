import {defineArrayMember, defineField, defineType} from 'sanity'

export const Products = defineType({
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
          title: "Alternative Text",
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
			validation: (Rule) => Rule.positive().min(0).error("El precio debe ser un número positivo."),
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