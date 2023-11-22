import React from "react";
import "./styles.scss";

export default function Donhangonline() {
  return (
    <div className="Donhangonline-Container">
      <p>Xuất Kho Hàng Hóa</p>
      <div className="MainDhonline">
        <div className="MainTop">
          <ul className="Ulsearchk">
            <li>Tìm Theo Kho</li>
            <select className="form-select" aria-label="Default select example">
              <option selected>Chọn chi nhánh</option>
              <option value="1">Kho 1</option>
              <option value="2">Kho 2</option>
              <option value="3">Kho 3</option>
            </select>
          </ul>
          <ul className="Ulsearchk">
            <li className="li1">Hình Thức Thanh Toán</li>
            <select
              className="form-select1"
              aria-label="Default select example"
            >
              <option selected>Hình Thức Thanh Toán</option>
              <option value="1">Tiền Mặt</option>
              <option value="2">Chuyển Khoản</option>
            </select>
          </ul>
          <ul className="Ulsearchk">
            <li className="li2">Tìm Nhà Phân Phối</li>
            <input type="text" className="ipnkhh" />
          </ul>
        </div>
        <div className="MainMid">
          <ul className="Bot">
            <p>Ngày Xuất Kho(Từ Ngày)</p>
            <input
              type="date"
              className="form-control form-control-sm"
              name="start"
              placeholder="Từ Ngày"
              fdprocessedid="jaumh9"
            ></input>
            <p className="p1">Ngày Xuất Kho(Đến Ngày)</p>
            <input
              type="date"
              className="form-control1 form-control-sm"
              name="end"
              placeholder="Đến Ngày"
              fdprocessedid="txcxy1d"
            ></input>
            <ul className="Formsea">
              <li className="li3">Tìm Theo Hàng</li>
              <input type="text" className="ipnkhh" />
            </ul>
            <ul className="Formsea1">
              <li className="li4">Tìm Số Hóa Đơn Nhập</li>
              <input type="text" className="ipnkhh" />
            </ul>
            <ul className="Formsea2">
              <li className="li5">Mã Vận Đơn</li>
              <input type="text" className="ipnkhh" />
            </ul>
          </ul>
        </div>
        <div className="MainBot">
          <ul className="Ulsearchk">
            <li>Nhà Phân Phối</li>
            <input type="text" className="ipnkhh" />
          </ul>
          <ul className="Ulsearchk">
            <li className="li1">Tìm Theo Trạng Thái Đơn Hàng</li>
            <select
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Trạng Thái Đơn Hàng</option>
              <option value="1">Đang Xử Lý</option>
              <option value="2">Đã Xử Lý</option>
              <option value="3">Đang Giao</option>
              <option value="4">Giao Thành Công</option>
            </select>
          </ul>
        </div>
        <div>
          <button className="BtnSearch">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div>
          <button className="BtnSearch">
          <i class="fa-solid fa-plus"></i>
          <span>Thêm Mới</span>
          </button>
        </div>
      </div>
    </div>
  );
}
