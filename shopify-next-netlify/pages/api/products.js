// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { postToShopify } from "../../utils/shopify";
export default async function getProductList() {
  try {
    const shopifyResponse = await postToShopify({
      query: `
        query getProductList {
          products(sortKey: TITLE, first: 100) {
            edges {
              node {
                id
                handle
                description
                title
                totalInventory
                variants(first: 5) {
                  edges {
                    node {
                      id
                      title
                      quantityAvailable
                      priceV2 {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
                priceRange {
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 1) {
                  edges {
                    node {
                      src
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });

    return shopifyResponse.products.edges;
  } catch (error) {
    console.log(error);
  }
};