import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let [cartId, setCartId] = useState(null);
  const [cartValue, setCartValue] = useState(true)
  const [cartNum, setCartNum] = useState(0)
  return (
    <AppContext.Provider value={{ cartId, setCartId,cartValue,setCartValue,cartNum,setCartNum}}>
      {children}
    </AppContext.Provider>
  );
}
const number = 0;

export function useAppContext() {
  return useContext(AppContext);
}
