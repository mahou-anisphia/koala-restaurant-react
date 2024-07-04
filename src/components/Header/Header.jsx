import React from "react";
import "./Header.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
const Header = () => {
  return (
    <>
      <div className="container">
        <div className="upper-header">
          <div className="location">
            <div className="loc-infor flex">
              {" "}
              <span>
                <IoLocationSharp className="mt-1.5 text-red-500 text-lg " />
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
        <div className="down-header grid grid-cols-8  ">
          <div>
            <img
              className=" logo w-80 h-16"
              src="../../src/assets/images/tchlogo.jpg"
              alt=""
            />
          </div>
          <div>
            <a href="#" className="menu-item">
              Cà phê
            </a>
          </div>
          <div>
            <a href="#" className="menu-item">
              Trà
            </a>
          </div>
          <div>
            <a href="#" className="menu-item">
              Menu
            </a>
          </div>
          <div className="menu-item">
            <a href="#" className="menu-item">
              Chuyện nhà
            </a>
          </div>
          <div className="menu-item">
            <a href="#" className="menu-item">
              Cảm hứng ClouFee
            </a>
          </div>
          <div className="menu-item">
            <a href="#" className="menu-item">
              Cửa hàng
            </a>
          </div>
          <div className="menu-item">
            <a href="#" className="menu-item mr-2">
              Tuyển dụng
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
