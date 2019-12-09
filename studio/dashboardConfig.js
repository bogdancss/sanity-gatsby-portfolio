export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5deebc1a8e2891018719247b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-e3xy3iu5',
                  apiId: '8f087ef1-904b-4593-8e0f-4a3318d124cc'
                },
                {
                  buildHookId: '5deebc1ad28cdd01865d3f73',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-z3uyv1wo',
                  apiId: '1a3f6b11-3de2-4859-bbf7-5ec7e04ce542'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bogdancss/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-z3uyv1wo.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
