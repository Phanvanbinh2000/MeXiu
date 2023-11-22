import React from "react";
import "./styles.scss";

export default function Xuatkhohanghoa() {
  return (
    <div className="Xuatkhh-Container">
      <p>Xuất Kho Hàng Hóa</p>
      <div className="MainXhanghoa">
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
        <div className="MainBot">
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
          </ul>
        </div>
        <div>
          <button className="BtnSearch">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div className="Function">
          <div>
            <p>Nhập Excel</p>
            <select
              className="form-selectexport"
              aria-label="Default select example"
            >
              <option selected>Chọn Mẫu Xuất</option>
              <option value="1">Nhập Xuất Tồn</option>
              <option value="2">Tồn Hiện Tại ĐVT</option>
              <option value="3">Chi Tiết Xuất</option>
              <option value="4">Bản Sao Kê Phiếu Nhập Xuất</option>
            </select>
            <div ><button className="BtnEx">Xuất excel</button></div>
          </div>
          <div>
            <p className="p1">In</p>
            <select
              className="form-selectexport1"
              aria-label="Default select example"
            >
              <option selected>Chọn Mẫu In</option>
              <option value="1">Thống Kê Xuất Bản</option>
              <option value="2">Thống Kê Xuất Hủy</option>
              <option value="3">Thống Kê Nhập</option>
            </select>
            <div><button className="BtnEx1">In</button></div>
          </div>
        </div>
        <div><button className="BtnEx2">Xuất Kho Mới</button></div>
      </div>
  );
}
