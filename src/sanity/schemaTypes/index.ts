import { type SchemaTypeDefinition } from 'sanity'

import {Marca} from './Marca'
import {Producto} from './Producto'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Producto, Marca],
}
