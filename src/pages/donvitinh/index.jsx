import React, { useState } from "react";
import { products } from './datadonvitinh';
import "./styles.scss";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ReactPaginate from "react-paginate";

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
        <Modal.Title>Thêm Mới Đơn Vị Tính</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form>
                        Mã đơn vị tính:{" "}
                        <input
                          type="text"
                          id="maDonViTinh"
                          className="form-control"
                        />
                        <br />
                        Tên đơn vị tính:{" "}
                        <input
                          type="text"
                          id="tenDonViTinh"
                          className="form-control"
                        />
                        <br />
                        Ngày Tạo:{" "}
                        <input type="date" id="ngay" className="form-control" />
                        <br />
                        <button type="submit" className="btn btn-success">
                          Lưu
                        </button>
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


const Donvitinh = () => {

  var selectRowProp = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "rgb(238, 193, 213)" 
  };


  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handlePageClick = () => {};

  return (
    <div className="main-content">
      <div className="row align-items-center">
        <div className="page-content">
          <div className="container-fluid">
            <div className="col-md-8">
              <h6 className="page-title">Danh Mục Đơn Vị Tính</h6>
            </div>

            <div className="card">
              <div className="card-body">
                {/* <!-- Fomt điền điều kiện lọc --> */}
                <form className="row g-3 needs-validation" noValidate>
                  {/* <!--Mã Sản Phẩm--> */}
                  <div className="col-md-2">
                    <label htmlFor="maDonViTinh" className="form-label">
                      Mã Đơn Vị Tính
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="maDonViTinh"
                      required
                    />
                  </div>
                  {/* <!--Kết Thúc Mã Sản Phẩm--> */}
                  {/* <!--Tên Sản Phẩm--> */}
                  <div className="col-md-2">
                    <label htmlFor="tenDonViTinh" className="form-label">
                      Tên Đơn Vị Tính
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="tenDonViTinh"
                      required
                    />
                  </div>
                  {/* <!--Kết Thúc Tên Sản Phẩm--> */}

                  <div>
                    <button
                      className="col-md-2 btn btn-primary mb-3"
                      type="button"
                      id="buttonTimKiem"
                    >
                      <i className="fas fa-search"></i>
                      {/* <!-- Biểu tượng tìm kiếm Font Awesome --> */}
                    </button>
                  </div>

                  {/* <!--font hiển thị popup--> */}
                  <Modal show={showModal} onHide={toggleModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Thêm Mới Đơn Vị Tính</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form>
                        Mã đơn vị tính:{" "}
                        <input
                          type="text"
                          id="maDonViTinh"
                          className="form-control"
                        />
                        <br />
                        Tên đơn vị tính:{" "}
                        <input
                          type="text"
                          id="tenDonViTinh"
                          className="form-control"
                        />
                        <br />
                        Ngày Tạo:{" "}
                        <input type="date" id="ngay" className="form-control" />
                        <br />
                        <button type="submit" className="btn btn-success">
                          Lưu
                        </button>
                      </form>
                    </Modal.Body>
                  </Modal>
                  {/* <!--Kết Thúc font hiển thị popup--> */}
                  {/* <!--Nút Thêm Mới--> */}
                  <div>
                    <Button variant="success" onClick={toggleModal}>
                      Thêm Mới
                    </Button>
                  </div>
                </form>
                {/* <!-- Kết thúc fomt điền điều kiện lọc --> */}
                {/* <!-- Lưới Dữ Liệu --> */}

                <div className="card-body">
                  <div className="row">
                    <div className="table-responsive col-md-2 card-body">
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
                        <TableHeaderColumn dataField="id" isKey dataAlign="center" dataSort>Mã Đơn Vị Tính</TableHeaderColumn>
                        <TableHeaderColumn dataField="name" dataAlign="center" dataSort>Tên Đơn Vị Tính</TableHeaderColumn>
                        <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort>Ngày Tạo</TableHeaderColumn>
                      </BootstrapTable>
                      
                      {/* <!-- Kết Thúc Lưới Dữ Liệu --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Hết--> */}
        </div>
      </div>
    </div>
  );
};

export default Donvitinh;
