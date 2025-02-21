const queryString = require('query-string')
const { postToShopify } = require('../functions/utils/postToShopify.js')
exports.handler = async (event) => {
    const { cartId } = queryString.parse(event.body);
  
    try {
      const response = await postToShopify({
        query: `
          query checkoutURL($cartId: ID!) {
            cart(id: $cartId) {
              checkoutUrl
            }
          }
        `,
        variables: {
          cartId,
        },
      });
  
      if (!response.cart.checkoutUrl) {
        throw new Error('No checkout URL returned');
      }
  
      return {
        statusCode: 301,
        headers: {
          Location: response.cart.checkoutUrl,
        },
        body: 'Redirecting to checkout...',
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  };  