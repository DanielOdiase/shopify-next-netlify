import { AppWrapper } from '../state.js'; // import based on where you put it
import '@styles/globals.css';
import Script from 'next/script'

export function Application({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
      <Script
      id= "search" 
      src= "https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"
      onLoad={() => {
        algoliasearchNetlify({
          appId: '85VKJPBHG0',
      apiKey: 'a135a148301c7f5251df549bef689db7',
      siteId: 'f7337d54-e3e5-4024-8410-4061f051395b',
      branch: 'main',
      selector: 'div#search'
      })
    }}
      />
    </AppWrapper>
  );
}

export default Application;
