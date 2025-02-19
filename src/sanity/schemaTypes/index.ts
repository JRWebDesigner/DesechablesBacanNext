import { type SchemaTypeDefinition } from 'sanity'

import { productType } from './productType'
import { categoryType } from './categoryType'
import {offersType} from './offersType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [offersType,categoryType, productType],
}
