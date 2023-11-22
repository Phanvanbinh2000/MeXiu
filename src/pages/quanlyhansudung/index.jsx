import React from "react";
import "./styles.scss";

export default function Quanlyhansudung() {
  return (
    <div className="Quanlyhsd-Container">
      <p>Quản Lý Hạn Sử Dụng Online</p>
      <div>
        <div className="MainTop">
          <div className="Ulsearchk">
            <p>Tìm Theo Kho</p>
            <select className="form-select" aria-label="Default select example">
              <option selected>Tìm Theo Kho</option>
              <option value="1">Kho 1</option>
              <option value="2">Kho 2</option>
              <option value="3">Kho 3</option>
            </select>
          </div>
          <div className="Ulsearchk">
            <p className="p1">Ngày Xuất Kho(Từ Ngày)</p>
            <input
              type="date"
              className="form-control form-control-sm"
              name="start"
              placeholder="Từ Ngày"
              fdprocessedid="jaumh9"
            ></input>
          </div>
          <div className="Ulsearchk">
            <p className="p1">Ngày Xuất Kho(Đến Ngày)</p>
            <input
              type="date"
              className="form-control form-control-sm"
              name="end"
              placeholder="Đến Ngày"
              fdprocessedid="txcxy1d"
            ></input>
          </div>
          <div className="Ulsearchk">
            <p className="p2">Tìm Theo Hàng</p>
            <input type="text" className="inptth" />
          </div>
        </div>
        <div className="MainBot">
          <div className="Bot">
            <div className="Ulsearchk">
              <p>Đơn Vị Tính</p>
              <select
                className="form-select1"
                aria-label="Default select example"
              >
                <option selected>Hình Thức Thanh Toán</option>
                <option value="1">Đơn Vị Tính 1</option>
                <option value="2">Đơn Vị Tính 2</option>
              </select>
            </div>
            <div className="Ulsearchk">
              <p className="p1">Số Tồn Kho</p>
              <input type="text" className="ipnkhh" />
            </div>
            <div className="Ulsearchk1">
              <p className="p1">Hình Thức Thanh Toán</p>
              <select
                className="form-select1"
                aria-label="Default select example"
              >
                <option selected>Hình Thức Thanh Toán</option>
                <option value="1">Sỉ</option>
                <option value="2">Lẻ</option>
              </select>
            </div>
            <div className="Ulsearchk2">
              <p className="p1">Ngày Hết Hạn</p>
              <input type="date" className="ipnkhh"/>
            </div>
          </div>
        </div>
        <div><button className="btnsrc"><i class="fa-solid fa-magnifying-glass"></i></button></div>
        <div></div>
      </div>
    </div>
  );
}
