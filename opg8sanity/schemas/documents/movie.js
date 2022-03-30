export default {
    type: 'document',
    name: 'movie',
    title: 'Movie',
    fields: [
        {
            type: 'string',
            name: 'title',
            title: 'title',
            description: 'Movie navn',
        },
        {
            type: 'reference',
            name: 'actor',
            title: 'actor',
            to: {type: 'actor'},
  
        },
        {
            type: 'reference',
            name: 'actor2',
            title: 'title',
            to: {type: 'actor'},
        },
        {
            type:'text',
            name:'tekst',
            title: 'Description',
            description: 'Informasjon'
        },
        {
            type:'image',
            name:'Bilde',
            title:'Movie Bilde',
        },
        {
            type: 'slug',
            name: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 200,
                slugify: input => input
                                        .toLowerCase()
                                        .replace(/\s+/g, '-')
                                        .slice(0, 200)
            }
        }
    ],
  }