export const heroSchema = {
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
      {
        name: 'badge',
        title: 'Badge Text',
        type: 'string',
        description: 'Small text in the pill above the headline e.g. 100% Plant Based',
      },
      {
        name: 'headline',
        title: 'Headline',
        type: 'string',
        description: 'Main headline e.g. Fuel Your Body.',
      },
      {
        name: 'subheadline',
        title: 'Sub Headline',
        type: 'string',
        description: 'Second line of headline e.g. The Clean Way.',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Paragraph below the headline',
      },
      {
        name: 'primaryButtonText',
        title: 'Primary Button Text',
        type: 'string',
      },
      {
        name: 'secondaryButtonText',
        title: 'Secondary Button Text',
        type: 'string',
      },
      {
        name: 'proofText1',
        title: 'Social Proof Text 1',
        type: 'string',
      },
      {
        name: 'proofText2',
        title: 'Social Proof Text 2',
        type: 'string',
      },
      {
        name: 'proofText3',
        title: 'Social Proof Text 3',
        type: 'string',
      },
    ],
  }