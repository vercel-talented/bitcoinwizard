import React, {useState } from "react";
import "./productListPage.scss";

const ProductListPage = () => {
  const productArray = [
    {
      name: "Bitcoin Wizard Tshirt",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/unisex-premium-t-shirt-dark-grey-heather-front-604b4598a1321-300x300.jpg",
      url2: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/unisex-premium-t-shirt-dark-grey-heather-front-604b4598a18d0-300x300.jpg",
      minPrice: "21.21",
      maxPrice: ""
    },
    {
      name: "Magic Internet Money Hoodie",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/unisex-premium-hoodie-charcoal-heather-front-604b476e3e77b-300x300.jpg",
      url2: "",
      minPrice: "39.95",
      maxPrice: ""
    },
    {
      name: "Magical Crewneck",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/unisex-crew-neck-sweatshirt-dark-heather-front-604b496a27205-300x300.jpg",
      url2: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/unisex-crew-neck-sweatshirt-dark-heather-front-604b496a273ed-300x300.jpg",
      minPrice: "34.00",
      maxPrice: "45.00"
    },
    {
      name: "Bitcoin Wizard Mug",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/white-glossy-mug-11oz-woman-604b531468af8-300x300.jpg",
      url2: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/white-glossy-mug-15oz-woman-604b53435f434-300x300.jpg",
      minPrice: "18.50",
      maxPrice: ""
    },

    {
      name: "Bitcoin Wizard TshirtMagic Internet Money Canvas",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/canvas-in-18x24-lifestyle-1-604b4ef244eb8-300x300.jpg",
      url2: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/canvas-in-12x12-lifestyle-1-604b4ef244f3b-300x300.jpg",
      minPrice: "44.50",
      maxPrice: "98.00"
    },
    {
      name: "Bitcoin Wizard stickers",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/kiss-cut-stickers-4x4-lifestyle-2-604b4fcad19db-300x300.jpg",
      url2: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/kiss-cut-stickers-3x3-lifestyle-1-604b4fcad1c26-300x300.jpg",
      minPrice: "3.00",
      maxPrice: "3.50"
    },
    {
      name: "Framed Bitcoin Wizard poster",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/enhanced-matte-paper-framed-poster-in-black-18x24-lifestyle-1-604b50da31665-300x300.jpg",
      url2: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/enhanced-matte-paper-framed-poster-in-black-8x10-lifestyle-3-604b50da30bfd-300x300.jpg",
      minPrice: "28.00",
      maxPrice: "111.50"
    },
    {
      name: "Throw Blanket",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/throw-blanket-50x60-lifestyle-604b527aca298-300x300.jpg",
      url: "",
      minPrice: "31.50",
      maxPrice: ""
    },

    {
      name: "Eco Tote Bag",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/eco-tote-bag-black-front-604b74b67d388-300x300.jpg",
      url2: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/eco-tote-bag-black-front-604b74b67d388-300x300.jpg",
      minPrice: "25.50",
      maxPrice: ""
    },
    {
      name: "Kids Hoodie",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/kids-hoodie-jet-black-front-604b7519f2386-300x300.jpg",
      url2: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/kids-hoodie-jet-black-front-604b7519f2630-300x300.jpg",
      minPrice: "31.50",
      maxPrice: ""
    },
    {
      name: "Unisex recycled t-shirt",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/unisex-recycled-t-shirt-black-front-604b75fe1047a-300x300.jpg",
      url2: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/unisex-recycled-t-shirt-black-front-604b75fe10609-300x300.jpg",
      minPrice: "22.50",
      maxPrice: "23.50"
    },
    {
      name: "Leggings",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/all-over-print-leggings-white-front-604b76f29defd-300x300.jpg",
      url2: "https://www.bitcoinwizard.com/wp-content/uploads/2021/03/all-over-print-leggings-white-back-604b76f29dfc7-300x300.jpg",
      minPrice: "42.50",
      maxPrice: ""
    },

    {
      name: "Bitcoin Wizard Satin robe",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2023/03/satin-robe-white-zoomed-in-3-640afe86084f2-300x300.jpg",
      url2: "https://www.bitcoinwizard.com/wp-content/uploads/2023/03/satin-robe-black-front-2-640afe86650de-300x300.jpg",
      minPrice: "69.50",
      maxPrice: ""
    },
    {
      name: "Bitcoin Wizard Hat",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2023/03/retro-trucker-hat-black-front-640b00e006405-300x300.jpg",
      url2: "",
      minPrice: "25.00",
      maxPrice: ""
    },
    {
      name: "Bitcoin Wizard Throw Blanket",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2023/03/throw-blanket-50x60-front-64131230e6ca5-300x300.png",
      url2: "",
      minPrice: "50.00",
      maxPrice: "60.00"
    },
    {
      name: "Bitcoin Wizard Hoodie",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2023/03/unisex-premium-hoodie-charcoal-heather-zoomed-in-641315d3443bd-300x300.jpg",
      url2: "https://www.bitcoinwizard.com/wp-content/uploads/2023/03/unisex-premium-hoodie-charcoal-heather-front-641315d34504f-300x300.jpg",
      minPrice: "55.00",
      maxPrice: ""
    },

    {
      name: "Bitcoin Wizard NF-Tea mug",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2023/03/white-glossy-mug-white-11oz-handle-on-right-641318d25162d-300x300.jpg",
      url2: "https://www.bitcoinwizard.com/wp-content/uploads/2023/03/white-glossy-mug-white-11oz-handle-on-left-641318d253410-300x300.jpg",
      minPrice: "17",
      maxPrice: ""
    },
    {
      name: "Bitcoin Wizard Canvas",
      url: "https://www.bitcoinwizard.com/wp-content/uploads/2023/03/canvas-in-18x24-front-6413463ee6a52-300x300.jpg",
      url2: "",
      minPrice: "53",
      maxPrice: ""
    },

  ];

  const [hoverIndex, setHoverIndex] = useState (-1);

  return (
    <div className="ProductListPage-alignment">
      <div className="container">
        <h2>WHY WORK WHEN YOU CAN JUST BUY MAGIC INTERNET MONEY?</h2>
        <div className="grid">
          {productArray?.map((item, index) => {
            return (
              <div className="grid-items" key={index}>
                <div className="img">
                  <img src={(index === hoverIndex) ? (item?.url2 ? item?.url2 : item?.url) : item?.url} alt={item?.name} onMouseEnter = {() => setHoverIndex (index)} onMouseLeave = {() => setHoverIndex (-1)}/>
                </div>
                <h3>{item?.name}</h3>
                <h4>{`$${item?.minPrice}`}{item?.maxPrice?.length > 0 && (` - ${item?.maxPrice}`)}</h4>
                <button>Select options</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
