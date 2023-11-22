import React from "react";
import "./styles.scss";

export default function Themctkh() {
  return (
    <div className="themctkhContainer">
      <ul className="mainthem">
        <li>Thêm Chi Tiết Khách Hàng</li>
        <li>Mã Khách Hàng:</li>
        <input
          type="text"
          placeholder="Vui Lòng Nhập Mã Khách Hàng..."
          className="ip"
        />
        <li>Tên</li>
        <input type="text" placeholder="Vui Lòng Nhập Tên..." className="ip" />
        <li>Email:</li>
        <input type="text" placeholder="Vui Lòng Nhập Email" className="ip" />
        <li>Địa Chỉ Khách Hàng:</li>
        <input
          type="text"
          placeholder="Vui Lòng Nhập Địa Chỉ Khách Hàng..."
          className="ip"
        />
        <li>Ngày Tháng Năm Sinh:</li>
        <input type="date" className="ip" />
        <ul>
          <li>Số Điện Thoại</li>
          <input
            type="number"
            placeholder="Vui Lòng Nhập Số Điện Thoại"
            className="ipnsdt"
          />
          <button className="del">Xóa</button>
        </ul>
        <li>Giới Tính:</li>
        <li className="cb">
          <div classname="form-check form-check-inline">
            <input
              className="frmc"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label className="form-check-label" for="inlineRadio1">
              Nam
            </label>
          </div>
          <div className="form-check1 form-check-inline">
            <input
              className="frmc"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label className="form-check-label" for="inlineRadio2">
              Nữ
            </label>
          </div>
        </li>
        <li>Note Thêm:</li>
        {/* <li>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </li> */}
        <li>
          <button className="btnluu">Lưu KH Mới</button>
        </li>
      </ul>
    </div>
  );
}
