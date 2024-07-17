import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer-container bg-slate-900 text-white ">
        <div className="up-footer grid grid-cols-4 gap-4 mt-10 mb-5 pt-16">
          <div className="foot-intro ml-10">
            <b>
              <h5>Giới thiệu</h5>
            </b>
            <p>Về chúng tôi</p>
            <p>Sản phẩm</p>
            <p>khuyến mãi</p>
            <p>Chuyện cà phê</p>
            <p>Cửa hàng</p>
            <p>Tuyển dụng</p>
          </div>
          <div className="foot-policy ">
            <b>
              <h5>Điều khoản</h5>
            </b>
            <p>Điều khoản sử dụng</p>
            <p>Chính sách bảo mật thông tin</p>
            <p>Hướng dẫn xuất hóa đơn GTGT</p>
          </div>
          <div className="order">
            <div className="flex">
              <span>
                <b>
                  <h5>
                    <FaPhone className="mt-1" />
                  </h5>
                </b>
              </span>

              <span className="text-phone ml-2">
                <b>
                  <h5>Đặt hàng: 1800.6936</h5>
                </b>
              </span>
            </div>
            <div className="flex mt-5">
              <span className="mt-1">
                <b>
                  <h5>
                    <FaLocationDot />
                  </h5>
                </b>
              </span>
              <span className="ml-2">
                <b>
                  <h5>Liên hệ</h5>
                </b>
              </span>
            </div>

            <p className="mt-5">
              Tầng 3-4 Hub Building 195/10E Điện Biên Phủ, P.15, Q.Bình Thạnh,
              TP.Hồ Chí Minh
            </p>
          </div>

          <div className="others mr-10">
            <img src="../../src/assets/images/shortcut.jpg" alt="" />
            <p>
              <div className="flex text-xl mt-2 ">
                <span>
                  <FaFacebook />
                </span>
                <span className="ml-3 text-xl">
                  <FaInstagram />
                </span>
              </div>
            </p>
          </div>
        </div>
        <hr className="border-none h-0.5 bg-white m-4" />
        <div className="down-footer h-40 ml-6">
          <p>Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN</p>
          <p>
            Mã số DN: 0312867172 do sở kế hoạch và đầu tư tp. HCM cấp ngày
            23/07/2014. Người đại diện: NGÔ NGUYÊN KHA
          </p>
          <p>
            Địa chỉ: 86-88 Cao Thắng, phường 04, quận 3, tp Hồ Chí Minh Điện
            thoại: (028) 7107 8079 Email: hi@thecoffeehouse.vn
          </p>
          <p>
            © 2014-2022 Công ty cổ phần thương mại dịch vụ Trà Cà Phê VN mọi
            quyền bảo lưu
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
