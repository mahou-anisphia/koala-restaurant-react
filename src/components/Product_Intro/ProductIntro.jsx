import React from "react";
import "./ProductIntro.css";

const products = [
  {
    image: "../../src/assets/images/product1.jpg",
    name: "Bơ Sữa Phô Mai Tươi",
    price: 55000,
  },
  {
    image: "../../src/assets/images/product2.jpg",
    name: "Dâu Phô Mai Tươi",
    price: 55000,
  },
  {
    image: "../../src/assets/images/product3.webp",
    name: "Hi-Tea Vải",
    price: 49000,
  },
  {
    image: "../../src/assets/images/product4.webp",
    name: "Cà Phê Sữa Đá",
    price: 29000,
  },
  {
    image: "../../src/assets/images/product5.webp",
    name: "Cơm Chiên Hải Sản",
    price: 49000,
  },
  {
    image: "../../src/assets/images/product6.webp",
    name: "Mochi Kem Chocolate",
    price: 19000,
  },
];

const ProductCard = ({ product }) => (
  <div className=" card bg-white rounded-lg shadow-md overflow-hidden w-ful">
    <div className="relative h-52">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
        style={{ height: "260px" }}
      />
    </div>
    <div className="p-4 mt-12">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.price.toLocaleString()} đ</p>
    </div>
  </div>
);

const ProductIntro = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2">
          <img
            className="w-full rounded-3xl"
            src="../../src/assets/images/product_intro.webp"
            alt="Trái Cây Xay 0°C"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-4 ">
          <div className="flex gap-4">
            <div className="w-1/2 ">
              <ProductCard product={products[0]} />
            </div>
            <div className="w-1/2 ">
              <ProductCard product={products[1]} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.slice(2).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductIntro;
