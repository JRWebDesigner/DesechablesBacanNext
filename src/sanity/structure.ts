import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('offers').title('Offers'),
      S.documentTypeListItem('category').title('Categorys'),
      S.documentTypeListItem('product').title('Products'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['offers','category', 'product'].includes(item.getId()!),
      ),
    ])
