import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Tea.css";

const teaProducts = [
  {
    id: 1,
    name: "Trà Đào Cam Sả-Đá",
    price: 49000,
    image: "../../src/assets/images/tea1.webp",
  },
  {
    id: 2,
    name: "Trà Đào Cam Sả-Nóng",
    price: 42000,
    image: "../../src/assets/images/tea2.webp",
  },
  {
    id: 3,
    name: "Trà Oolong Tứ Quý Vải",
    price: 48000,
    image: "../../src/assets/images/tea3.webp",
  },
  {
    id: 4,
    name: "Oolong Tứ Quý Kim Quất Trân Châu",
    price: 50000,
    image: "../../src/assets/images/tea4.webp",
  },
  {
    id: 5,
    name: "Trà Đen Macchiato",
    price: 55000,
    image: "../../src/assets/images/tea5.webp",
  },
  {
    id: 6,
    name: "Trà Oolong Tứ Quý Sen",
    price: 45000,
    image: "../../src/assets/images/tea6.webp",
  },
];

const TeaProductGrid = ({ products, onProductClick }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-sans">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Trà</h2>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-amber-50 rounded-lg overflow-hidden shadow-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => onProductClick(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full object-cover"
              style={{ height: "260px" }}
            />
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-2 text-gray-800">
                {product.name}
              </h3>
              <p className="font-bold text-gray-900">
                {product.price.toLocaleString()} đ
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          Không tìm thấy sản phẩm phù hợp.
        </p>
      )}
    </div>
  );
};

const Tea = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  const handleDeliveryClick = () => {
    navigate("/delivery", { state: { product: selectedProduct } });
  };

  return (
    <>
      <Header />
      <div className="tea-container min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TeaProductGrid products={teaProducts} onProductClick={openModal} />
        </div>
      </div>
      <Footer />
      {selectedProduct && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="product-modal"
          overlayClassName="product-modal-overlay"
        >
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover mb-4 rounded"
            />
            <p className="text-gray-800 font-semibold mb-4">
              {selectedProduct.price.toLocaleString()} đ
            </p>
            <button
              onClick={closeModal}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded mr-4 hover:bg-gray-400 transition duration-300"
            >
              Đóng
            </button>
            <button
              onClick={handleDeliveryClick}
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
            >
              Giao hàng tận nơi
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Tea;
