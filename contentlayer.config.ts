import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Pet = defineDocumentType(() => ({
  name: 'Pet',
  filePathPattern: `pets/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    category: { type: 'string', required: true },
    image: { type: 'string', required: true, validate: (image: string) => image.startsWith('/images/') },
    description: { type: 'string', required: true },
    temperament: { type: 'list', of: { type: 'string' }, default: [] },
    publishedAt: {type: 'date', required: true},
    lifespan: { type: 'string', required: true },
    weight: { type: 'string', required: true },
    height: { type: 'string', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
    url: {
      type: 'string',
      resolve: (doc) => `/${doc.category}/${doc._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    },
  },
}));

export const Guide = defineDocumentType(() => ({
  name: 'Guide',
  filePathPattern: `guides/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    image: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' }, default: [] }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/care-guides/${doc._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Pet, Guide],
});