import React, { useState } from "react";
import { products } from './datephieunhap';
import "./styles.scss";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ReactPaginate from "react-paginate";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import BootstrapTable from 'react-bootstrap-table-next';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
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
      name: document.getElementById("name").value,
      chinhanh: document.getElementById("chinhanh").value,
      kho: document.getElementById("kho").value,
      createdDate: document.getElementById("createdDate").value,
      idncc: document.getElementById("idncc").value,
      namencc: document.getElementById("namencc").value,
      tongtien: document.getElementById("tongtien").value,
      datra: document.getElementById("datra").value,
      note: document.getElementById("note").value
    };
    products.push(newCustomer);
    // Lưu dữ liệu vào localStorage
    localStorage.setItem('products', JSON.stringify(products));
    onSave(event);
  };

  return (
    <Modal show={true} onHide={onModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm Mới Phiếu Nhập</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form>
                        Chi Nhánh:{" "}
                        <input
                          type="text"
                          id="chinhanh"
                          className="form-control"
                        />
                        <br />
                        Kho Hàng:{" "}
                        <input
                          type="text"
                          id="Kho"
                          className="form-control"
                        />
                        <br />
                        Mã Nhà Cung Cấp:{" "}
                        <input
                          type="text"
                          id="idncc"
                          className="form-control"
                        />
                        <br />
                        Tên Nhà Cung Cấp:{" "}
                        <input
                          type="text"
                          id="namencc"
                          className="form-control"
                        />
                        <br />
                        Mã Hóa Đơn:{" "}
                        <input
                          type="text"
                          id="id"
                          className="form-control"
                        />
                        <br />
                        Tên Hóa Đơn:{" "}
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                        />
                        <br />
                        Tổng tiền:{" "}
                        <input
                          type="text"
                          id="tongtien"
                          className="form-control"
                        />
                        <br />
                        Đã Trả:{" "}
                        <input
                          type="text"
                          id="datra"
                          className="form-control"
                        />
                        <br />
                        Ngày tạo:{" "}
                        <input
                          type="date"
                          id="ngayTao"
                          className="form-control"
                        />
                        <br />
                        Ghi Chú:{" "}
                        <input
                          type="text"
                          id="note"
                          className="form-control"
                        />
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


const Phieunhap = () => {

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
              <h6 className="page-title">Phiếu Nhập</h6>
            </div>

            <div className="card">
              <div className="card-body">
                <form className="row g-3 needs-validation" noValidate>
                  <div className="col-md-2">
                    <label htmlFor="timChiNhanh" className="form-label">
                      Chi Nhánh</label>

                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="chinhanh"
                      required
                    />
                    {/* <select
                      className="form-select form-select-sm"
                      id="timChiNhanh"
                      required
                    >
                      <option selected disabled value="">
                        Chọn chi Nhánh
                      </option>
                      <option>Chi Nhánh 1</option>
                      <option>Chi Nhánh 2</option>
                      <option>Chi Nhánh 3</option>
                    </select>
                    <div className="invalid-feedback">
                      Vui Lòng Chọn Chi Nhánh...
                    </div> */}
                  </div>
{/* 
                  <div className="col-md-2">
                    <label>Từ Ngày{" "}
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-md-2">
                    <label>Đến Ngày{" "}
                    <input type="date" className="form-control" />
                  </div> */}

                  <div className="col-md-2">
                    <label htmlFor="timKhoTheoChiNhanh" className="form-label">
                      Kho Hàng
                      </label>


                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="kho"
                      required
                    />
                    {/* <select
                      className="form-select form-select-sm"
                      id="timKhoTheoChiNhanh"
                      required
                    >
                      <option selected disabled value="">
                        Chọn Kho
                      </option>
                      <option>Kho 1</option>
                      <option>Kho 2</option>
                      <option>Kho 3</option>
                    </select>
                    <div className="invalid-feedback">Vui Lòng Chọn Kho...</div> */}
                  </div>

                  <div className="col-md-2">
                    <label htmlFor="maNhaCungCap" className="form-label">
                      Mã Nhà Cung Cấp
                      </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="idncc"
                      required
                    />
                  </div>

                  <div className="col-md-2">
                    <label htmlFor="tenNhaCungCap" className="form-label">
                      Tên Nhà Cung Cấp
                      </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="namencc"
                      required
                    />
                  </div>

                  <div className="col-md-2">
                    <label htmlFor="maHoaDon" className="form-label">
                      Mã Hoá Đơn
                      </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="id"
                      required
                    />
                  </div>

                  <div className="col-md-2">
                    <label htmlFor="tenHoaDon" className="form-label">
                      Tên Hoá Đơn
                      </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="name"
                      required
                    />
                  </div>

                  {/* <div className="col-md-3">
                    <label htmlFor="timLoaiHoaDon" className="form-label">
                      Tìm Loại Hoá Đơn
                    {" "}
                    <select
                      className="form-select form-select-sm"
                      id="timLoaiHoaDon"
                      required
                    >
                      <option selected disabled value="">
                        Chọn Loại Hoá Đơn
                      </option>
                      <option>Online</option>
                      <option>Truyền Thống</option>
                    </select>
                    <div className="invalid-feedback">
                      Vui Lòng Chọn Loại Hoá Đơn...
                    </div>
                  </div> */}

                  <div>
                    <button
                      className="col-md-2 btn btn-primary mb-3"
                      type="button"
                      id="nutTimKiem"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>

                  <Modal show={showModal} onHide={toggleModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Thêm Mới Phiếu Nhập</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* Form goes here */}
                      <form>
                          Chi Nhánh:{" "}
                          <input
                            type="text"
                            id="chinhanh"
                            className="form-control"
                          /><br />
                        {/* <div className="form-group">
                          <label htmlFor="tenChiNhanh">Tên Chi Nhánh:{" "}
                          <input
                            type="text"
                            id="tenChiNhanh"
                            className="form-control"
                          />
                        </div> */}
                        Mã Nhà Cung Cấp:{" "}
                          <input
                            type="text"
                            id="idncc"
                            className="form-control"
                          />
                        <br />
                            Tên Nhà Cung Cấp:{" "}
                          <input
                            type="text"
                            id="namencc"
                            className="form-control"
                          />
                        <br />
                          Tên Kho:{" "}
                          <input
                            type="text"
                            id="kho"
                            className="form-control"
                          />
                        <br />
                          Tên Hóa Đơn:{" "}
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                          />
                        <br />
                          Mã Hóa Đơn:{" "}
                          <input
                            type="text"
                            id="id"
                            className="form-control"
                          /><br />
                       
                        {/* <div className="form-group">
                          <label htmlFor="loaiHopDong">Loại Hợp Đồng:{" "}
                          <input
                            type="text"
                            id="loaiHopDong"
                            className="form-control"
                          />
                        </div> */}
                        Tổng Tiền Trả:{" "}
                          <input
                            type="number"
                            id="tongtien"
                            className="form-control"
                          />
                        <br />
                          Số Tiền Đã Trả:{" "}
                          <input
                            type="number"
                            id="datra"
                            className="form-control"
                          />
                        <br />
                          Ngày Nhập:{" "}
                          <input
                            type="date"
                            id="createdDate"
                            className="form-control"
                          /><br />
                        {/* 
                          <label htmlFor="ngayTao">Ngày Tạo:{" "}
                          <input
                            type="date"
                            id="ngayTao"
                            className="form-control"
                          />
                        </div> */}
                        
                            Hình Ảnh Hoá Đơn:{" "}
                          <div className="mb-3">
                            <input
                              type="file"
                              id="uploadHinhAnhHoaDon"
                              onChange="previewImage(event, 'previewHinhAnhHoaDon')"
                              multiple="multiple"
                            />
                            <img
                              id="previewHinhAnhHoaDon"
                              src="#"
                              alt="Hình Ảnh Hoá Đơn"
                              onClick="openImageModal('previewHinhAnhHoaDon')"
                              style={{ display: "none" }}
                            />
                          </div>
                        <br />
                            Hình Ảnh Thanh Toán:{" "}
                          <div className="mb-3">
                            <input
                              type="file"
                              id="uploadHinhAnhThanhToan"
                              onChange="previewImage(event, 'previewHinhAnhThanhToan')"
                              multiple="multiple"
                            />
                            <img
                              id="previewHinhAnhThanhToan"
                              src="#"
                              alt="Hình Ảnh Thanh Toán"
                              onClick="openImageModal('previewHinhAnhThanhToan')"
                              style={{ display: "none" }}
                            />
                          </div>
                        <br />
                          Ghi Chú:{" "}
                          <textarea
                            className="form-control"
                            id="ghiChu"
                            name="note"
                          ></textarea><br />
                        <button type="submit" className="btn btn-success">
                          Lưu
                        </button>
                      </form>
                    </Modal.Body>
                  </Modal>

                  <div>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => (window.location.href = "#")}
                    >
                      Phiếu Nhập Chi Tiết
                    </button>
                  </div>
                </form>

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
                          <TableHeaderColumn dataField="id" isKey dataAlign="center" dataSort>Mã Phiếu Nhập</TableHeaderColumn>
                          <TableHeaderColumn dataField="name" dataAlign="center" dataSort>Tên Phiếu Nhập</TableHeaderColumn>
                          <TableHeaderColumn dataField="namencc" dataAlign="center" dataSort>Nhà Cung Cấp</TableHeaderColumn>
                          <TableHeaderColumn dataField="tongtien" dataAlign="center" dataSort>Tổng Tiền Hóa Đơn</TableHeaderColumn>
                          <TableHeaderColumn dataField="datra" dataAlign="center" dataSort>Đã Trả</TableHeaderColumn>
                          <TableHeaderColumn dataField="note" dataAlign="center" dataSort>Ghi Chú</TableHeaderColumn>
                          <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort>Ngày Tạo</TableHeaderColumn>
                        </BootstrapTable>
                        
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phieunhap;
