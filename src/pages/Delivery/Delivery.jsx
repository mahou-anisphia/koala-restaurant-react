import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Delivery = () => {
  const location = useLocation();
  const { product } = location.state || {};

  const [recipientName, setRecipientName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let validationErrors = {};

    if (!recipientName) {
      validationErrors.recipientName = "Tên người nhận không được để trống";
    } else if (/\d/.test(recipientName)) {
      validationErrors.recipientName = "Tên người nhận không được có số";
    }

    if (!address) {
      validationErrors.address = "Địa chỉ không được để trống";
    }

    if (!phoneNumber) {
      validationErrors.phoneNumber = "Số điện thoại không được để trống";
    } else if (isNaN(phoneNumber)) {
      validationErrors.phoneNumber = "Số điện thoại chỉ được chứa chữ số";
    } else if (phoneNumber.length !== 10) {
      validationErrors.phoneNumber = "Số điện thoại phải có đúng 10 ký tự";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      alert("Form submitted successfully");
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />
      <div className="delivery-container min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md rounded-lg p-6 flex">
            <img
              src={product.image}
              alt={product.name}
              className="w-48 h-80 object-cover mr-6"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
              <p className="text-gray-800 font-semibold mb-4">
                {product.price.toLocaleString()} đ
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Tên người nhận:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                  />
                  {errors.recipientName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.recipientName}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Địa chỉ giao hàng:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Số điện thoại người nhận:
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
                <button className="bg-orange-500 text-white py-2 px-4 rounded">
                  Xác nhận
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Delivery;
