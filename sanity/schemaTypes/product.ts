export const productSchema = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'type',
        title: 'Product Type',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'string',
      },
      {
        name: 'tag',
        title: 'Tag',
        type: 'string',
      },
    ],
  }