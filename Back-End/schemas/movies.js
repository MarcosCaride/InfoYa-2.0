export default {
    name: 'movies',
    type: 'document',
      title: 'Movies',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
          name: 'img',
          title: 'Image',
          type: 'image'
      },
      {
          name: 'description',
          title: 'Description',
          type: 'text',
      },
      {
          name: 'releaseDate',
          title: 'Release Date',
          type: 'date',
      },
      {
          name: 'castMembers',
          title: 'Cast Members',
          type: 'array',
          of: [
            {
              title: 'Actor name',
              type: 'object',
              fields: [
                {
                  title: 'Name',
                  name: 'name',
                  type: 'string'
                },
                {
                    title: 'Image',
                    name: 'img',
                    type: 'image',
                },
                {
                    title: 'Role',
                    name: 'role',
                    type: 'string'
                }
              ]
            }
          ]
      },
      {
          name: 'director',
          title: 'Director',
          type: 'array',
          of: [
              {
                  title: 'Director',
                  type: 'object',
                  fields: [
                    {
                        title: 'Name',
                        name: 'name',
                        type: 'string'
                    },
                    {
                        title: 'Image',
                        name: 'img',
                        type: 'image',
                    },
                  ]
              }
          ]
        },
        {
            name: 'trailerUrl',
            title: 'Trailer URL',
            type: 'url',
        },
        {
            name: 'timeDuration',
            title: 'Duration',
            type: 'string'
        }
    ]
  }