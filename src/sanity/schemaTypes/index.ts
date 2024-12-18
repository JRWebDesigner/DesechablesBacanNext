import { type SchemaTypeDefinition } from 'sanity'

import {authorType} from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType],
}
