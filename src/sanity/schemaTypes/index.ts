import { type SchemaTypeDefinition } from 'sanity'

import { productType } from './productType'
import { categoryType } from './categoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, productType],
}
