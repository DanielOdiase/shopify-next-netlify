import Link from 'next/link';
import { useAppContext } from "../state";
export default function Header() {
  const{cartNum,setCartNum}=useAppContext()
  console.log(cartNum)
  return (
    <header className="app-header">
      <nav className="main-nav">
        <img src="https://www.lifefitness.com/resource/crblob/1164/260e4ad4ec1b7642864fbe5a149d147c/logo-svg-data.svg" alt="life-fitnessimg"/>
        <ul>
          <li className="main-nav-item">
            <Link href="/">
              <a>All Products</a>
            </Link>
          </li>
        
          <li className="main-nav-item">
            <Link href="/cart">
              <a className="cart cartLink">Shopping Cart {cartNum}</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div id="search" ></div>
     
    </header>
  );
}


