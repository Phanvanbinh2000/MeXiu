import React, { useState } from "react";
import { products } from './datanhacungcap';
import "./styles.scss";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ReactPaginate from "react-paginate";

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
      <form>
                        Mã Nhà Cung Cấp:{" "}
                        <input
                          type="text"
                          id="maNhaCungCap"
                          className="form-control"
                        />
                        <br />
                        Tên Nhà Cung Cấp:{" "}
                        <input
                          type="text"
                          id="tenNhaCungCap"
                          className="form-control"
                        />
                        <br />
                        Số Điện Thoại Nhà Cung Cấp:{" "}
                        <input
                          type="text"
                          id="soDienThoaiNhaCungCap"
                          className="form-control"
                        />
                        <br />
                        Ghi Chú:{" "}
                        <textarea
                          className="form-control"
                          id="ghiChu"
                          name="area"
                        ></textarea>
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


const Nhacungcap = () => {

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
    const checkboxes = document.querySelectorAll(".row-check");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  };

  const handleCheck = () => {
    const totalRows = document.querySelectorAll(".row-check").length;
    const checkedRows = document.querySelectorAll(".row-check:checked").length;
    document.getElementById("chonTatCa").checked = totalRows === checkedRows;
  };

  const handlePageClick = () => {};

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <h4 className="card-title">Chi Tiết Nhà Cung Cấp</h4>
          {/* <!-- Bắt đầu khung chứa điều kiện lọc --> */}
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2">
                  <label>Mã Nhà Cung Cấp</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập Mã Khách Hàng"
                    id="maNhaCungCap"
                  />
                </div>
                <div className="col-md-2">
                  <label>Tên Nhà Cung Cấp</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập Tên Khách Hàng"
                    id="tenNhaCungCap"
                  />
                </div>
                <div className="col-md-2">
                  <label>Số Điện Thoại Nhà Cung Cấp</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập Số Điện Thoại Khách Hàng"
                    id="soDienThoaiNhaCungCap"
                  />
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

                  {/* <!-- font hiển thị popup --> */}
                  <Modal show={showModal} onHide={toggleModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Thêm Mới Nhà Cung Cấp</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form>
                        Mã Nhà Cung Cấp:{" "}
                        <input
                          type="text"
                          id="maNhaCungCap"
                          className="form-control"
                        />
                        <br />
                        Tên Nhà Cung Cấp:{" "}
                        <input
                          type="text"
                          id="tenNhaCungCap"
                          className="form-control"
                        />
                        <br />
                        Số Điện Thoại Khách Hàng:{" "}
                        <input
                          type="text"
                          id="soDienThoaiNhaCungCap"
                          className="form-control"
                        />
                        <br />
                        Ghi Chú:{" "}
                        <textarea
                          className="form-control"
                          id="ghiChu"
                          name="area"
                        ></textarea>
                        <br />
                        <button type="submit" className="btn btn-success">
                          Lưu
                        </button>
                      </form>
                    </Modal.Body>
                  </Modal>
                  {/* <!-- Kết Thúc font hiển thị popup --> */}

                  {/* <!-- font hiển thị popup sửa --> */}
                  <Modal show={editModal} onHide={toggleEditModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Sửa Nhà Cung Cấp</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form>
                        Mã Nhà Cung Cấp:{" "}
                        <input
                          type="text"
                          id="maNhaCungCap"
                          className="form-control"
                        />
                        <br />
                        Tên Nhà Cung Cấp:{" "}
                        <input
                          type="text"
                          id="tenNhaCungCap"
                          className="form-control"
                        />
                        <br />
                        Số Điện Thoại Khách Hàng:{" "}
                        <input
                          type="text"
                          id="soDienThoaiNhaCungCap"
                          className="form-control"
                        />
                        <br />
                        Ghi Chú:{" "}
                        <textarea
                          className="form-control"
                          id="ghiChu"
                          name="area"
                        ></textarea>
                        <br />
                        <button type="submit" className="btn btn-success">
                          Cập nhật
                        </button>
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
                    cellEdit={cellEditProp}
                    deleteRow
                    search
                    tableStyle={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}
                    options={options}
                  >
                    <TableHeaderColumn dataField="id" isKey dataAlign="center" dataSort>Mã Nhà Cung Cấp</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataAlign="center" dataSort>Tên Nhà Cung Cấp</TableHeaderColumn>
                    <TableHeaderColumn dataField="address" dataAlign="center" dataSort>Địa Chỉ</TableHeaderColumn>
                    <TableHeaderColumn dataField="phone" dataAlign="center" dataSort>SĐT</TableHeaderColumn>
                    
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

export default Nhacungcap;
