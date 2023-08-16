const project = {
  name: "project",
  title: "projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "name",
      type: "string",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {source: "name"}
    },
    {
      name: "image",
      title: "image",
      type: "image",
      options: {hotspot: true}
    },
    {
      name: "url",
      title: "url",
      type: "url"
    },
    {
      name: "content",
      title: "content",
      type: "array",
      of: [{type: "block"}],
    }
  ]
}

export default project;