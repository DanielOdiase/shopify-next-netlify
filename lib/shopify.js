import Client from "shopify-buy";
export const shopifyClient = Client.buildClient({
  storefrontAccessToken:process.env.SHOPIFY_STOREFRONT_API_TOKEN ,
  domain: process.env.SHOPIFY_API_ENDPOINT,
});


export const parseShopifyResponse = (response) =>  JSON.parse(JSON.stringify(response));