export default {
  type: 'document',
  name: 'actor',
  title: 'Actor',
  fields: [
      {
          type: 'string',
          name: 'actor',
          title: 'actor',
          description: 'Actor`s name',
      },
      {
          type:'text',
          name:'actorTekst',
          title: 'Description',
          description: 'Get to know the Actor',
      },
      {
          type:'image',
          name:'poster',
          title: 'Actor poster',
      },
       {
          type: 'reference',
          name: 'movie',
          title: 'movie',
          to: {type: 'movie'},

      },
     
      {
          type: 'slug',
          name: 'name',
          title: 'Slug',
          options: {
              source: 'actor',
              maxLength: 200,
              slugify: input => input
                                      .toLowerCase()
                                      .replace(/\s+/g, '-')
                                      .slice(0, 200)
          }
      }
  ]

}