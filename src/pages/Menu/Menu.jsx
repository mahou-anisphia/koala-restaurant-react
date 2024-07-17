import React, { useState } from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const products = {
  coffee: [
    {
      name: "Cafe1",
      price: "49.000 đ",
      image: "path/to/image1.jpg",
    },
    {
      name: "Cafe2",
      price: "49.000 đ",
      image: "path/to/image2.jpg",
    },
    {
      name: "Cafe3",
      price: "49.000 đ",
      image: "path/to/image3.jpg",
    },
    { name: "Cafe4", price: "45.000 đ", image: "path/to/image4.jpg" },
  ],
  juice: [
    { name: "Juice 1", price: "50.000 đ", image: "path/to/image5.jpg" },
    { name: "Juice 2", price: "50.000 đ", image: "path/to/image6.jpg" },
    { name: "Juice 3", price: "50.000 đ", image: "path/to/image7.jpg" },
    { name: "Juice 4", price: "50.000 đ", image: "path/to/image8.jpg" },
  ],
  "milk-tea": [
    { name: "Milk Tea 1", price: "45.000 đ", image: "path/to/image9.jpg" },
    { name: "Milk Tea 2", price: "45.000 đ", image: "path/to/image10.jpg" },
    { name: "Milk Tea 3", price: "45.000 đ", image: "path/to/image11.jpg" },
    { name: "Milk Tea 4", price: "45.000 đ", image: "path/to/image12.jpg" },
  ],
  snack: [
    { name: "Snack 1", price: "30.000 đ", image: "path/to/image13.jpg" },
    { name: "Snack 2", price: "30.000 đ", image: "path/to/image14.jpg" },
    { name: "Snack 3", price: "30.000 đ", image: "path/to/image15.jpg" },
    { name: "Snack 4", price: "30.000 đ", image: "path/to/image16.jpg" },
  ],
  "home-taste": [
    { name: "Home Taste 1", price: "55.000 đ", image: "path/to/image17.jpg" },
    { name: "Home Taste 2", price: "55.000 đ", image: "path/to/image18.jpg" },
    { name: "Home Taste 3", price: "55.000 đ", image: "path/to/image19.jpg" },
    { name: "Home Taste 4", price: "55.000 đ", image: "path/to/image20.jpg" },
  ],
};

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p className="text-slate-500">{product.price}</p>
    </div>
  );
};

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("coffee");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow">
        <div className="w-1/4 bg-orange-200 p-4">
          <h1 className="text-xl font-bold mb-4 text-slate-500">Sản Phẩm</h1>
          <nav className="space-y-2">
            <button
              onClick={() => setSelectedCategory("coffee")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-slate-500"
            >
              Cà phê
            </button>
            <button
              onClick={() => setSelectedCategory("juice")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-slate-500"
            >
              Trái cây xay
            </button>
            <button
              onClick={() => setSelectedCategory("milk-tea")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-slate-500"
            >
              Trà sữa
            </button>
            <button
              onClick={() => setSelectedCategory("snack")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-slate-500"
            >
              Bánh & Snack
            </button>
            <button
              onClick={() => setSelectedCategory("home-taste")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-slate-500"
            >
              Thưởng thức tại nhà
            </button>
          </nav>
        </div>
        <div className="w-3/4 p-4 bg-white">
          <h2 className="text-2xl font-bold mb-4">
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}
          </h2>
          <div className="grid grid-cols-2 gap-4  ">
            {products[selectedCategory].map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
