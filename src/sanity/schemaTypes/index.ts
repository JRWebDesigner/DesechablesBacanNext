import { type SchemaTypeDefinition } from 'sanity'

import {Marks} from './Mark'
import {Products} from './Product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Marks,Products],
}
