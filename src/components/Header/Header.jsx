import React from "react";
import "./Header.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="upper-header">
        <div className="location">
          <div className="loc-infor flex">
            <span>
              <IoLocationSharp className="mt-1.5 text-red-500 text-lg" />
            </span>
            <span className="text-loc text-slate-500">
              128 Cửa hàng khắp cả nước
            </span>
          </div>
        </div>
        <div className="phone">
          <div className="phone-infor flex">
            <span>
              <FaPhone className="mt-1.5 text-red-500" />
            </span>
            <span className="text-phone ml-1 text-slate-500">
              Đặt hàng: 1800.6936
            </span>
          </div>
        </div>
      </div>
      <div className="down-header">
        <div className="logo-container">
          <Link to="/home">
            <img
              className="logo"
              src={"../../src/assets/images/tchlogo.jpg"}
              alt="TCH Logo"
            />
          </Link>
        </div>
        <div className="menu">
          <Link className="menu-item" to="/coffee">
            Cà phê
          </Link>
          <Link className="menu-item" to="/tea">
            Trà
          </Link>
          <Link className="menu-item" to="/menu">
            Menu
          </Link>
          <a href="#" className="menu-item">
            Chuyện nhà
          </a>
          <a href="#" className="menu-item">
            Cảm hứng ClouFee
          </a>
          <a href="#" className="menu-item">
            Cửa hàng
          </a>
          <a href="#" className="menu-item">
            Tuyển dụng
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
