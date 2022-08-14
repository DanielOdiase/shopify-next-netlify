import Head from "next/head";
import ProductListing from "@components/ProductListing";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { getProductList } from "@api/getProductList";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Fitness {'&'} Exercise Equipment for Your Facility or Home | Life Fitness</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className='img-container'><img className="banner-img" src='https://static.gymequipment.co.uk/pub/media/wysiwyg/gd/img_gd-unigym-1524x646-compressor.jpg'/></div>
      <main>
    
        <div className="mid-text-cont">
        <h2 className="mid-text">TOP SELLERS. SOMETHING FOR EVERYONE.</h2>
        <p className="small-text">Explore our Top Sellers in Equipments.</p>
        </div>
        <div id="search" ></div>
        <ul className="product-grid">
          {products.map((p, index) => {
            return <ProductListing key={`/product${index}`} product={p.node} />;
          })}
        </ul>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductList();

  return {
    props: {
      products,
    },
  };
}
