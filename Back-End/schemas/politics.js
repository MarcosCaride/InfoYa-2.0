export default {
    name: 'politics',
    title: 'Politics',
    type: 'document',
    fields: [
        {
            name: 'titulo',
            title: 'Titulo',
            type: 'string',
        },
        {
            name: 'img',
            title: 'Portada',
            type: 'image'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'authors',
            title: 'Authors',
            type: 'array',
            of: [
                {
                    title: 'Author',
                    type: 'object',
                    fields: [
                        {
                            title: 'Author Name',
                            name: 'authorName',
                            type: 'string',
                        },
                        {
                            title: 'Author Surmane',
                            name: 'authorSurname',
                            type: 'string',
                        },
                        {
                            title: 'Image',
                            name: 'img',
                            type: 'image',
                        },
                    ]
                }
            ]
        }
    ]
}