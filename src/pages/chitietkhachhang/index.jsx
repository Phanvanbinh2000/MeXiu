import React, { useState } from "react";
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

  // Tạo dữ liệu mẫu
  const products = [
    {
      id: '1',
      name: 'Nguyễn Văn A',
      address: 'Hà Nội',
      phone: '0123456789',
      birthYear: '1990',
      purchaseDate: '2022-01-01'
    },
    {
      id: '2',
      name: 'Trần Văn B',
      address: 'Hồ Chí Minh',
      phone: '0987654321',
      birthYear: '1991',
      purchaseDate: '2022-02-01'
    },
    {
      id: '3',
      name: 'Lê Văn C',
      address: 'Đà Nẵng',
      phone: '0123456789',
      birthYear: '1992',
      purchaseDate: '2022-03-01'
    },
    {
      id: '4',
      name: 'Phạm Văn D',
      address: 'Hải Phòng',
      phone: '0987654321',
      birthYear: '1993',
      purchaseDate: '2022-04-01'
    },
    {
      id: '5',
      name: 'Nguyễn Văn E',
      address: 'Cần Thơ',
      phone: '0123456789',
      birthYear: '1994',
      purchaseDate: '2022-05-01'
    },
    {
      id: '6',
      name: 'Trần Văn F',
      address: 'Bình Dương',
      phone: '0987654321',
      birthYear: '1995',
      purchaseDate: '2022-06-01'
    },
    {
      id: '7',
      name: 'Lê Văn G',
      address: 'Nghệ An',
      phone: '0123456789',
      birthYear: '1996',
      purchaseDate: '2022-07-01'
    },
    {
      id: '8',
      name: 'Phạm Văn H',
      address: 'Hà Tĩnh',
      phone: '0987654321',
      birthYear: '1997',
      purchaseDate: '2022-08-01'
    },
    {
      id: '9',
      name: 'Nguyễn Văn I',
      address: 'Quảng Bình',
      phone: '0123456789',
      birthYear: '1998',
      purchaseDate: '2022-09-01'
    },
    {
      id: '10',
      name: 'Trần Văn J',
      address: 'Quảng Trị',
      phone: '0987654321',
      birthYear: '1999',
      purchaseDate: '2022-10-01'
    },
    {
      id: '11',
      name: 'Lê Văn K',
      address: 'Thừa Thiên Huế',
      phone: '0123456789',
      birthYear: '2000',
      purchaseDate: '2022-11-01'
    },
    {
      id: '12',
      name: 'Phạm Văn L',
      address: 'Đà Nẵng',
      phone: '0987654321',
      birthYear: '2001',
      purchaseDate: '2022-12-01'
    },
    // Thêm dữ liệu mẫu tại đây
  ];

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
                    insertRow
                    deleteRow
                    search
                    tableStyle={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}
                  >
                    <TableHeaderColumn dataField="id" isKey dataAlign="right" dataSort>Mã KH</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataSort>Tên KH</TableHeaderColumn>
                    <TableHeaderColumn dataField="address" dataSort>Địa Chỉ</TableHeaderColumn>
                    <TableHeaderColumn dataField="phone" dataSort>SĐT</TableHeaderColumn>
                    <TableHeaderColumn dataField="birthYear" dataSort>Năm Sinh</TableHeaderColumn>
                    <TableHeaderColumn dataField="purchaseDate" dataSort>Ngày Mua</TableHeaderColumn>
                    <TableHeaderColumn dataField="action" dataFormat={actionFormat}>Thao Tác</TableHeaderColumn>
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
