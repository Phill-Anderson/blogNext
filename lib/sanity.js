const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.NODE_ENV === "production", // sanity дээр байгаа cache-лэгдсэн data - г татаж авна
});

export const previewClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false, // sanity дээр байгаа сүүлийн үеийн data-г татаж авна
  token: 'skBLK3VtFefrRwK3j9MqdZqnUg0sX7qFjfNYeoYfOJhcisjkgxQdCzvWuxz38LdCw3JfURpVv8Ji1btPdDYj0TtGwh6vupSpiH25HcfCWn21jwpJAsVl2CDkihLewjdxGEE105hBlWAqBWh5F7aDica44hG24pS6jlcfzwKo1owIKgRhJaJO'
});

export default client;
