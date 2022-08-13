import { useState, useEffect } from "react";
import { useAppContext } from "../state";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";

export default function Cart() {
  const [showProducts, setShowProducts] = useState(true);
  const [products, setProducts] = useState([]);
  const [cost, setCost] = useState({});
  const { cartId, setCartId } = useAppContext();
  const {cartValue} = useAppContext()
  

  useEffect(async () => {
    const localCart = cartId;

    if (localCart === null) {
      setShowProducts(false);
    } else {
      setCartId(localCart);
      const response = await fetch( `${process.env.NETLIFY_URL}/.netlify/functions/get-cart`, {
        method: "post",
        body: JSON.stringify({
          cartId: localCart,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      setProducts(json?.cart?.lines.edges);
      setCost(json?.cart?.estimatedCost);
      
      return json;
    }
  }, []);


  return (
    <div>
      {showProducts && products?.length > 0 ? (
        <div>
          <CartTable
            cartItems={products}
            cartId={cartId}
            removeItem={setProducts}
          />
          <CartTotal cost={cost} />
          
          {cartId && (
          <form action= {`${process.env.NETLIFY_URL}/.netlify/functions/create-checkout`} method="POST">
            <input type="hidden" name="cartId" value={cartId} />
            <div className="checkoutBtn">
            <button className="checkBtn">Check Out</button>
            </div>
          </form>
        )}

        </div>
      ) : (
        <div className="cart-page-message">
          No products to show! Get shopping!
        </div>
      )}
    </div>
  );
}
