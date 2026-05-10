import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getProducts() {
  return client.fetch(
    `*[_type == "product"] {
      name,
      type,
      description,
      price,
      tag,
      image
    }`,
    {},
    {
      next: { revalidate: 60 }
    }
  )
}

export async function getHero() {
  return client.fetch(
    `*[_type == "hero"][0] {
      badge,
      headline,
      subheadline,
      description,
      primaryButtonText,
      secondaryButtonText,
      proofText1,
      proofText2,
      proofText3
    }`,
    {},
    {
      next: { revalidate: 60 }
    }
  )
}