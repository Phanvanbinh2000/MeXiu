import React, { useState } from "react";
import { products } from './datachitietkhachhang.js';
import "./styles.scss";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
//1
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import BootstrapTable from 'react-bootstrap-table-next';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

// Định nghĩa hàm actionFormat
const actionFormat = (cell, row) => {
  // let editAction = `<a className="btn btn-secondary btn-sm edit" title="Edit" onClick={this.editData(${row.id})}><i class="fas fa-pencil-alt"></i></a>`; // ví dụ về thao tác sửa
  // let deleteAction = `<a className="btn btn-danger btn-sm delete" title="Delete" onClick={this.deleteData(${row.id})}><i class="fas fa-trash-alt"></i></a>`; // ví dụ về thao tác xoá
  // return editAction + " " + deleteAction;
  
};

let lastId = products.length > 0 ? parseInt(products[products.length - 1].id) : 0;

const createCustomModal = (onModalClose, onSave, columns, validateState, ignoreEditable) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission goes here
    // Tự sinh mã KH
    lastId++;
    // Lưu dữ liệu ảo và hiển thị trên lưới dữ liệu
    const newCustomer = {
      id: lastId.toString(),
      name: document.getElementById("tenKhachHang").value,
      address: document.getElementById("maNhomKhachHang").value,
      phone: document.getElementById("tenNhomKhachHang").value,
      birthYear: document.getElementById("soDienThoaiKhachHang").value,
      purchaseDate: document.getElementById("ngaySinhTu").value
    };
    products.push(newCustomer);
    // Lưu dữ liệu vào localStorage
    localStorage.setItem('products', JSON.stringify(products));
    onSave(event);
  };

  return (
    <Modal show={true} onHide={onModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm Mới Khách Hàng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleFormSubmit}>
          Mã KH: <input type="text" id="maKhachHang" className="form-control" value={lastId} readOnly /><br />
          Tên KH: <input type="text" id="tenKhachHang" className="form-control" /><br />
          Mã Nhóm KH: <input type="text" id="maNhomKhachHang" className="form-control" /><br />
          Tên Nhóm KH: <input type="text" id="tenNhomKhachHang" className="form-control" /><br />
          SĐT: <input type="text" id="soDienThoaiKhachHang" className="form-control" /><br />
          Ngày Sinh Từ: <input type="date" id="ngaySinhTu" className="form-control" /><br />
          Ngày Sinh Đến: <input type="date" id="ngaySinhDen" className="form-control" /><br />
          <button type="submit" className="btn btn-success">Lưu</button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
const cellEditProp = {
  mode: 'dbclick', // Chế độ chỉnh sửa khi nhấp vào ô
  blurToSave: true, // Lưu khi bỏ focus khỏi ô đang chỉnh sửa
};

const options = {
  insertModal: createCustomModal
};

const Chitietkhachhang = () => {

  var selectRowProp = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "rgb(238, 193, 213)" 
  };
  
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  const handleCheckBirthdays = () => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    let hasBirthday = false;
    let birthdayName = '';
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach((row) => {
      const dob = row.querySelector('td:nth-child(6)').textContent;
      const dobMonth = new Date(dob).getMonth() + 1;
      if (dobMonth === currentMonth) {
        hasBirthday = true;
        birthdayName = row.querySelector('td:nth-child(3)').textContent;
        return false; // break the loop
      }
    });
    if (hasBirthday) {
      alert(`Tháng này có sinh nhật của Khách Hàng ${birthdayName}!`);
    } else {
      alert("Không có sinh nhật của Khách Hàng trong tháng này.");
    }
  };

 

  return (
    <div className="main-content">

      <div className="page-content">
        <div className="container-fluid">
          <h4 className="card-title">Chi Tiết Khách Hàng</h4>
          {/* <!-- Bắt đầu khung chứa điều kiện lọc --> */}
          <div className="card">
            <div className="card-body">
              <div className="row">

                <div className="col-md-2">
                  <label>Mã Khách Hàng</label>
                  <input type="text" className="form-control" id="id" />
                </div>
                <div className="col-md-2">
                  <label>Tên Khách Hàng</label>
                  <input type="text" className="form-control" id="tenKhachHang" />
                </div>

                {/* Field option xổ list Mã + Tên Nhóm Khách Hàng */}
                <div className="col-md-2">
                  <label>Nhóm Khách Hàng</label>
                  <input type="text" className="form-control" id="tenNhomKhachHang" />
                </div>
                <div className="col-md-2">
                  <label>Ngày Sinh Từ</label>
                  <input type="date" className="form-control" id="ngaySinhTu" />
                </div>
                <div className="col-md-2">
                  <label>Ngày Sinh Đến</label>
                  <input type="date" className="form-control" id="ngaySinhDen" />
                </div>
                <div className="col-md-2">
                  <button type="submit" className="btn btn-primary mt-4">Tìm Kiếm</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Kết thúc khung chứa điều kiện lọc --> */}



          {/* <!-- Lưới Dữ Liệu --> */}
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="col-md-2 mb-3">
                    <button id="checkBirthdays" type="button" className="btn btn-primary" onClick={handleCheckBirthdays}>Kiểm tra
                      sinh nhật</button>
                  </div>

                  {/* <Modal show={showModal} onHide={toggleModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Thêm Mới Khách Hàng</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form>
                        Mã Khách Hàng: <input type="text" id="maKhachHang" className="form-control" /><br />
                        Tên Khách Hàng: <input type="text" id="tenKhachHang" className="form-control" /><br />
                        Mã Nhóm Khách Hàng: <input type="text" id="maNhomKhachHang" className="form-control" /><br />
                        Tên Nhóm Khách Hàng: <input type="text" id="tenNhomKhachHang" className="form-control" /><br />
                        Số Điện Thoại Khách Hàng: <input type="text" id="soDienThoaiKhachHang" className="form-control" /><br />
                        Ngày Sinh Từ: <input type="date" id="ngaySinhTu" className="form-control" /><br />
                        Ngày Sinh Đến: <input type="date" id="ngaySinhDen" className="form-control" /><br />
                        <button type="submit" className="btn btn-success">Lưu</button>
                      </form>
                    </Modal.Body>
                  </Modal>

                  <Modal show={editModal} onHide={toggleEditModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Sửa Chi Tiết Khách Hàng</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form>
                        Mã Khách Hàng: <input type="text" id="maKhachHang" className="form-control" /><br />
                        Tên Khách Hàng: <input type="text" id="tenKhachHang" className="form-control" /><br />
                        Mã Nhóm Khách Hàng: <input type="text" id="maNhomKhachHang" className="form-control" /><br />
                        Tên Nhóm Khách Hàng: <input type="text" id="tenNhomKhachHang" className="form-control" /><br />
                        Số Điện Thoại Khách Hàng: <input type="text" id="soDienThoaiKhachHang" className="form-control" /><br />
                        Ngày Sinh Từ: <input type="date" id="ngaySinhTu" className="form-control" /><br />
                        Ngày Sinh Đến: <input type="date" id="ngaySinhDen" className="form-control" /><br />
                        <button type="submit" className="btn btn-success">Lưu</button>
                      </form>
                    </Modal.Body>
                  </Modal> */}

                  <BootstrapTable
                    data={products}
                    selectRow={selectRowProp}
                    striped
                    hover
                    condensed
                    pagination
                    insertRow={true}
                    cellEdit={cellEditProp}
                    deleteRow
                    search
                    tableStyle={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}
                    options={options}
                  >
                    <TableHeaderColumn dataField="id" isKey dataAlign="center" dataSort>Mã KH</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataAlign="center" dataSort>Tên KH</TableHeaderColumn>
                    <TableHeaderColumn dataField="address" dataAlign="center" dataSort>Địa Chỉ</TableHeaderColumn>
                    <TableHeaderColumn dataField="phone" dataAlign="center" dataSort>SĐT</TableHeaderColumn>
                    <TableHeaderColumn dataField="birthYear" dataAlign="center" dataSort>Năm Sinh</TableHeaderColumn>
                    <TableHeaderColumn dataField="purchaseDate" dataAlign="center" dataSort>Ngày Mua</TableHeaderColumn>
                    
                  </BootstrapTable>

                </div>
              </div>
            </div>
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
      </div>
    </div>
  );
};

export default Chitietkhachhang;
