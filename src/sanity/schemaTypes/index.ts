import { type SchemaTypeDefinition } from 'sanity'

import {Marks} from './Mark'
import {Producto} from './Product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Marks,Producto],
}
