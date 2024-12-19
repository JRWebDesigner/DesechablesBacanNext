import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Desechables Bacan Admin')
    .items([
      S.documentTypeListItem('Marca').title('Marca'),
      S.documentTypeListItem('Producto').title('Producto'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['Marca','Producto'].includes(item.getId()!),
      ),
    ])
