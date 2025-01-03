import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('mark').title('Marks'),
      S.documentTypeListItem('product').title('Products'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['mark', 'product'].includes(item.getId()!),
      ),
    ])
