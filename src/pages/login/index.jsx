import React from "react";
import "./styles.scss";
import logo from "../../assets/imgs/logo-sm.png";

export default function Login() {
  return (
    <div className="Login-Container">
      <div className="FormLogin">
        <div className="TopLogin">
          <h3>Chào mừng trở lại</h3>
          <p>Đăng nhập sử dụng Trang Kho Hàng Mẹ Xíu</p>
        </div>
        <div className="Logo">
          <img
            src={logo}
            alt=""
            width={24}
            height={24}
            className="LconHome"
            title="Trang chủ"
          />
        </div>
        <div className="Bottomlogin">
          <p className="Label">Tên người dùng</p>
          <input
            type="text"
            className="Textfield"
            placeholder="Nhập tên người dùng"
          />
          <p className="Label">Mật khẩu</p>
          <input
            type="password"
            className="Textfield"
            placeholder="Nhập mật khẩu"
          />

          <div className="formCheck">
            <input type="checkbox" value="" className="Checkbox" />
            <span>Ghi nhớ tôi</span>
            <div className="BtnLogin">
              <p className="TxtLogin">Đăng nhập</p>
            </div>
          </div>
        </div>
      <div className="Footer">
        <p>
          © 2023Web Này Được Tạo Bởi Team Lâm Số điện thoại liên hệ nếu gặp lỗi
          0356 095 046
        </p>
      </div>
      </div>
      <div className="IconHomePage">
       <i class="fa-solid fa-house-chimney fa-2x" width={40} height={40}></i>
      </div> 
    </div>
  );
}
