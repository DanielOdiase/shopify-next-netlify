module.exports = {
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
      script:[{
        src:'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js',
      } ,
      {
        innerHTML:`algoliasearchNetlify({
          appId: '85VKJPBHG0',
      apiKey: 'a135a148301c7f5251df549bef689db7',
      siteId: 'f7337d54-e3e5-4024-8410-4061f051395b',
      branch: 'main',
      selector: 'div#search',
        })`,
      } 
      ],
      link: [
        {
          rel: 'stylesheet',
          href:'https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css'
          
        }
      ]
  }
  