export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604b63519b8bddad191bdaa7',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-x3onrftj',
                  apiId: '81628db1-5dae-49cc-a915-4a6edfc73b4f'
                },
                {
                  buildHookId: '604b635102627fa4d09506a3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uxkcp5sh',
                  apiId: 'c2b4895e-2ebc-4e30-935b-435335b8a973'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ercekal/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uxkcp5sh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
