import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        {" "}
        <Product
          id="3215"
          title="Código Limpio / Clean Code : Robert C. Martin"
          price={9361}
          rating={5}
          image="https://http2.mlstatic.com/D_NQ_NP_733189-MLA42623652264_072020-O.webp"
        />
        <Product
          id="3215"
          title="Código Limpio / Clean Code : Robert C. Martin"
          price={9361}
          rating={5}
          image="https://http2.mlstatic.com/D_NQ_NP_733189-MLA42623652264_072020-O.webp"
        />
      </div>
      <div className="home__row">
        {" "}
        <Product
          id="3215"
          title="Código Limpio / Clean Code : Robert C. Martin"
          price={9361}
          rating={5}
          image="https://http2.mlstatic.com/D_NQ_NP_733189-MLA42623652264_072020-O.webp"
        />
        <Product
          id="3215"
          title="Código Limpio / Clean Code : Robert C. Martin"
          price={9361}
          rating={5}
          image="https://http2.mlstatic.com/D_NQ_NP_733189-MLA42623652264_072020-O.webp"
        />
        <Product
          id="3215"
          title="Código Limpio / Clean Code : Robert C. Martin"
          price={9361}
          rating={5}
          image="https://http2.mlstatic.com/D_NQ_NP_733189-MLA42623652264_072020-O.webp"
        />
      </div>
      <div className="home__row">
        {" "}
        <Product
          id="3215"
          title="Código Limpio / Clean Code : Robert C. Martin"
          price={9361}
          rating={5}
          image="https://http2.mlstatic.com/D_NQ_NP_733189-MLA42623652264_072020-O.webp"
        />
      </div>
    </div>
  );
}

export default Home;
