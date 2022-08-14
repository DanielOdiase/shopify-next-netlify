import Link from 'next/link';
import { useAppContext } from "../state";
export default function Header() {
  const{cartNum,setCartNum}=useAppContext()
  console.log(cartNum)
  return (
    <header className="app-header">
      <nav className="main-nav">
        <img src="https://www.lifefitness.com/resource/crblob/1164/260e4ad4ec1b7642864fbe5a149d147c/logo-svg-data.svg" alt="life-fitnessimg"/>
        <div id="search" ></div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
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
    </header>
  );
}


