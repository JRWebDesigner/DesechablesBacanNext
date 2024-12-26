import { type SchemaTypeDefinition } from 'sanity'

import { productType } from './productType'
import { markType } from './markType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [markType, productType],
}
