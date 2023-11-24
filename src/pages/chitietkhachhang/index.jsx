import React, { useState } from "react";
import { products } from './datachitietkhachhang.js';
import "./styles.scss";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import BootstrapTable from 'react-bootstrap-table-next';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

// Định nghĩa hàm actionFormat
const actionFormat = (cell, row) => {
  // Thực hiện các thao tác format tại đây và trả về kết quả
  // Đảm bảo rằng các thao tác được thực hiện một cách hợp lý với bản
  // Thêm thao tác vào đây
  let editAction = `<a className="btn btn-secondary btn-sm edit" title="Edit" onClick={this.editData(${row.id})}><i class="fas fa-pencil-alt"></i></a>`; // ví dụ về thao tác sửa
  let deleteAction = `<a className="btn btn-danger btn-sm delete" title="Delete" onClick={this.deleteData(${row.id})}><i class="fas fa-trash-alt"></i></a>`; // ví dụ về thao tác xoá
  return editAction + " " + deleteAction;
};


const Chitietkhachhang = () => {

   // Tạo dữ liệu mẫu
  

  
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
  
  const handleCheckAll = () => {
    const checkboxes = document.querySelectorAll('.row-check');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  };

  const handleCheck = () => {
    const totalRows = document.querySelectorAll('.row-check').length;
    const checkedRows = document.querySelectorAll('.row-check:checked').length;
    document.getElementById('checkAll').checked = totalRows === checkedRows;
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
                  <input type="text" className="form-control" placeholder="Nhập Mã Khách Hàng" id="maKhachHang" />
                </div>
                <div className="col-md-2">
                  <label>Tên Khách Hàng</label>
                  <input type="text" className="form-control" placeholder="Nhập Tên Khách Hàng" id="tenKhachHang" />
                </div>
                <div className="col-md-2">
                  <label>Mã Nhóm Khách Hàng</label>
                  <input type="text" className="form-control" placeholder="Nhập Mã Nhóm Khách Hàng" id="maNhomKhachHang" />
                </div>
                <div className="col-md-2">
                  <label>Tên Nhóm Khách Hàng</label>
                  <input type="text" className="form-control" placeholder="Nhập Tên Nhóm Khách Hàng" id="tenNhomKhachHang" />
                </div>
                <div className="col-md-2">
                  <label>Số Điện Thoại Khách Hàng</label>
                  <input type="text" className="form-control" placeholder="Nhập Số Điện Thoại Khách Hàng" id="soDienThoaiKhachHang" />
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
                    <Button variant="success" onClick={toggleModal}>
                      Thêm
                    </Button>
                  </div>
                  <div className="col-md-2 mb-3">
                    <button id="checkBirthdays" type="button" className="btn btn-primary" onClick={handleCheckBirthdays}>Kiểm tra
                      sinh nhật</button>
                  </div>

                  {/* <!-- font hiển thị popup --> */}
                  <Modal show={showModal} onHide={toggleModal}>
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
                  {/* <!-- Kết Thúc font hiển thị popup --> */}

                  {/* <!-- font hiển thị popup sửa --> */}
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
                  </Modal>
                  {/* <!-- Kết Thúc font hiển thị popup sửa --> */}

                  <BootstrapTable
                    data={products}
                    selectRow={selectRowProp}
                    striped
                    hover
                    condensed
                    pagination
                    insertRow={true}
                    deleteRow
                    search
                    tableStyle={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}
                  >
                    <TableHeaderColumn dataField="id" isKey dataAlign="center" dataSort>Mã KH</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataAlign="center" dataSort>Tên KH</TableHeaderColumn>
                    <TableHeaderColumn dataField="address" dataAlign="center" dataSort>Địa Chỉ</TableHeaderColumn>
                    <TableHeaderColumn dataField="phone" dataAlign="center" dataSort>SĐT</TableHeaderColumn>
                    <TableHeaderColumn dataField="birthYear" dataAlign="center" dataSort>Năm Sinh</TableHeaderColumn>
                    <TableHeaderColumn dataField="purchaseDate" dataAlign="center" dataSort>Ngày Mua</TableHeaderColumn>
                    <TableHeaderColumn dataField="action" dataAlign="center" dataFormat={actionFormat}>Thao Tác</TableHeaderColumn>
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
