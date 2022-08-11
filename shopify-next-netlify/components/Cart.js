
import { useState, useEffect } from "react";
import { useAppContext } from "../state";
import CartTable from "./CartTable";
import CartTotal from "./CartTotal";

export default function Cart() {
  const [showProducts, setShowProducts] = useState(true);
  const [products, setProducts] = useState([]);
  const [cost, setCost] = useState({});
 
  const { cartId, setCartId } = useAppContext();
  
  const fetchdata =async()=>{
        const localCart = cartId;
        if (localCart === null) {
          setShowProducts(!showProducts);
        } else {
          setCartId(localCart);
          const url = new URL(process.env.URL||`http://localhost:3000`)
         url.pathname=`/api/functions/get-cart`
          const response = await fetch(url.pathname, {
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
    }

    useEffect(() => {
   fetchdata()
    }, [])
    
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
        </div>
      ) : (
        <div className="cart-page-message">
          No products to show! Get shopping!
        </div>
      )}
    </div>
  );
}