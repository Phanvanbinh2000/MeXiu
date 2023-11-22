import React from "react";
import "./styles.scss";

export default function Kiemphieunhapkho() {
  return (
    <div className="Kiempnk-Container">
      <p>Kiểm Phiếu Nhập Kho</p>
      <div>
        <div className="Maintop">
          <div className="Ulsearchk">
            <p className="p1">Mã Hóa Đơn</p>
            <input type="text" className="ipnhd" />
          </div>
          <div className="Ulsearchk1">
            <p className="p1">Quét Mã Hàng</p>
            <input type="text" className="ipnmh" />
          </div>
          <div className="Ulsearchk2">
            <p className="p1">Số Lượng</p>
            <input type="number" className="ipnsl" />
          </div>
          <div className="Ulsearchk3">
            <p className="p1">Ngày</p>
            <input type="date" className="ipnkhh" />
          </div>
          <div className="Ulsearchk4">
            <p className="p1">Kho</p>
            <select className="form-select" aria-label="Default select example">
              <option selected>Tìm Theo kho</option>
              <option value="1">Kho 1</option>
              <option value="2">Kho 2</option>
              <option value="2">Kho 3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="btn">
        <button className="btn1">Hoàn Thành</button>
        <button className="btn2">Kiểm Đơn Mới</button>
      </div>
      <div className="exp">
        <div>
          <p className="p1">Xuất Hóa Đơn</p>
          <select className="form-select" aria-label="Default select example">
            <option selected>Chọn Mẫu Xuất</option>
            <option value="1">Nhập Xuất Tồn</option>
            <option value="2">Tồn Hiện Tại ĐVT</option>
            <option value="3">Chi Tiết Nhập</option>
            <option value="4">Bản Sao Kê Phiếu Nhập Xuất</option>
          </select>
          <div>
            <button className="btnex">Xuất Excel</button>
          </div>
        </div>
        <div className="exp1">
          <p className="p1">Xuất Hóa Đơn</p>
          <select className="form-select1" aria-label="Default select example">
            <option selected>Chọn Mẫu In</option>
            <option value="1">Thống Kê Xuất Bản</option>
            <option value="2">Thống Kê Xuất Hủy</option>
            <option value="3">Thống Kê Nhập</option>
          </select>
          <div>
            <button className="btnex1">In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
