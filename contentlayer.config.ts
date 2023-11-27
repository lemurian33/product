import {
  defineNestedType,
  defineDocumentType,
  makeSource,
} from 'contentlayer/source-files';

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "the title of the post ",
      required: true,
    },
    excerpt: {
      type:"string",
      description: "the description of the post ",
      required: true,
    },
    date: {
      type: "date",
      description: "the date of the post ",
      required: true,
    },
    image: {
      type: "string",
      description: "the  featured image of the post ",
      required: true,
    },
    author: {
      type: "string",
      description: "the  author image of the post ",
      required: true,
    },
    categories: {
      type: "list",
      of: Category,
      description: "the  categories image of the post ",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `${doc._raw.flattenedPath}`,
    }
  }
}))

const Category = defineNestedType(() => ({
  name: "Category",
  fields: {
    title: {
      type: "string",
      description: "The title of the category",
      required: true,
    }
  }
}))

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the project",
      require: true,
    },
    location: {
      type: "string",
      description: "The location of the project",
      require: true,
    },
    date: {
      type: "date",
      description: "The date of the project",
      require: true,
    },
    image: {
      type: "string",
      description: "The image of the project",
      require: true,
    },
    client: {
      type: "string",
      description: "The client of the project",
      require: true,
    },
    role: {
      type: "string",
      description: "The role of the project",
      require: true,
    },
    year: {
      type: "string",
      description: "The year of the project",
      require: true,
    },
    description: {
      type: "string",
      description: "the  description content of the project ",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    }
  }
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
})
