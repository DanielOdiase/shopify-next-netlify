import { postToShopify } from "../../utils/shopify"

// Creates a cart with a single item
export default async function createCartWithItem ({ itemId, quantity })  {
  try {
    const response = await postToShopify({
      query: `
        mutation createCart($cartInput:CartInput) {
          cartCreate(input: $cartInput) {
            cart {
                checkoutUrl
              id
              createdAt
              updatedAt
              lines(first:10) {
                edges {
                  node {
                    id
                    quantity
                    merchandise {
                      ... on ProductVariant {
                        id
                        title
                        priceV2 {
                          amount
                          currencyCode
                        }
                        product {
                          id
                          title
                        }
                      }
                    }
                  }
                }
              }
              estimatedCost {
                totalAmount {
                  amount
                  currencyCode
                }
                subtotalAmount {
                  amount
                  currencyCode
                }
                totalTaxAmount {
                  amount
                  currencyCode
                }
                totalDutyAmount {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      `,
      variables: {
        cartInput: {
          lines: [
            {
              quantity,
              merchandiseId: itemId,
            },
          ],
        },
      },
    })

    return {
        statusCode:200,
        body:JSON.stringify({
            cartId:response.cartCreate?.cart?.id,
            checkoutUrl:response.cartCreate?.cart?.checkoutUrl
        })
    } 
  } catch (error) {
    console.log(error)
  }
}