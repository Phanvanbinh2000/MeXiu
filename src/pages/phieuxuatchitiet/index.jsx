import React, { useState } from "react";
import { products } from './dataphieuxuatchitiet';
import "./styles.scss";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ReactPaginate from "react-paginate";import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
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
      idHD: document.getElementById("idHD").value,
      nameHD: document.getElementById("nameHD").value,
      soLuong: document.getElementById("soLuong").value,
      idLoaiSp: document.getElementById("idLoaiSp").value,
      nameLoaiSp: document.getElementById("nameLoaiSp").value,
      idPhanLoai: document.getElementById("idPhanLoai").value,
      namePhanLoai: document.getElementById("namePhanLoai").value,
      diem: document.getElementById("diem").value,
      gia1: document.getElementById("gia1").value,
      donVi1: document.getElementById("donVi1").value,
      gia2: document.getElementById("gia2").value,
      donVi2: document.getElementById("donVi2").value,
      gia3: document.getElementById("gia3").value,
      donVi3: document.getElementById("donVi3").value,
      gia4: document.getElementById("gia4").value,
      donVi4: document.getElementById("donVi4").value,
      soNgay: document.getElementById("soNgay").value,
      hanSuDung: document.getElementById("hanSuDung").value,
      maVach: document.getElementById("maVach").value,
      maQR: document.getElementById("maQR").value,
      note: document.getElementById("note").value,
      createdDate: document.getElementById("createdDate").value
    };
    products.push(newCustomer);
    // Lưu dữ liệu vào localStorage
    localStorage.setItem('products', JSON.stringify(products));
    onSave(event);
  };

  return (
    <Modal show={true} onHide={onModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm Mới Phiếu Nhập Chi Tiết</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form>
                        Mã Sản Phẩm:{" "}
                        <input
                          type="text"
                          id="maSanPham"
                          className="form-control"
                        />
                        <br />
                        Tên Sản Phẩm:{" "}
                        <input
                          type="text"
                          id="tenSanPham"
                          className="form-control"
                        />
                        <br />
                        Mã Loại Sản Phẩm:{" "}
                        <input
                          type="text"
                          id="maLoaiSanPham"
                          className="form-control"
                        />
                        <br />
                        Tên Loại Sản Phẩm:{" "}
                        <input
                          type="text"
                          id="tenLoaiSanPham"
                          className="form-control"
                        />
                        <br />
                        Mã Phân Loại Sản Phẩm:{" "}
                        <input
                          type="text"
                          id="maPhanLoaiSanPham"
                          className="form-control"
                        />
                        <br />
                        Tên Phân Loại Sản Phẩm:{" "}
                        <input
                          type="text"
                          id="tenPhanLoaiSanPham"
                          className="form-control"
                        />
                        <br />
                        Đơn Vị Tính 1:{" "}
                        <input
                          type="text"
                          id="donViTinh1"
                          className="form-control"
                        />
                        <br />
                        Đơn Vị Tính 2:{" "}
                        <input
                          type="text"
                          id="donViTinh2"
                          className="form-control"
                        />
                        <br />
                        Đơn Vị Tính 3:{" "}
                        <input
                          type="text"
                          id="donViTinh3"
                          className="form-control"
                        />
                        <br />
                        Đơn Vị Tính 4:{" "}
                        <input
                          type="text"
                          id="donViTinh4"
                          className="form-control"
                        />
                        <br />
                        {/*Đơn Giá: <input type="number" id="dongia" className="form-control" /><br />*/}
                        Hệ Số 1:{" "}
                        <input
                          type="text"
                          id="heSo1"
                          className="form-control"
                        />
                        <br />
                        Hệ Số 2:{" "}
                        <input
                          type="text"
                          id="heSo2"
                          className="form-control"
                        />
                        <br />
                        Hệ Số 3:{" "}
                        <input
                          type="text"
                          id="heSo3"
                          className="form-control"
                        />
                        <br />
                        Hệ Số 4:{" "}
                        <input
                          type="text"
                          id="heSo4"
                          className="form-control"
                        />
                        <br />
                        Điểm:{" "}
                        <input
                          type="number"
                          id="Diem"
                          className="form-control"
                        />
                        <br />
                        Số Ngày Cảnh Báo:{" "}
                        <input
                          type="number"
                          id="soNgayCanhBao"
                          className="form-control"
                        />
                        <br />
                        Ngày Tạo:{" "}
                        <input
                          type="date"
                          id="ngayTao"
                          className="form-control"
                        />
                        <br />
                        Hình Ảnh Sản Phẩm:{" "}
                        <div className="mb-5">
                          <form action="#" className="dropzone">
                            <div className="fallback">
                              <input
                                name="file"
                                type="file"
                                multiple="multiple"
                              />
                            </div>

                            <div className="dz-message needsclick"></div>
                          </form>
                          {/* <!-- end form --> */}
                        </div>
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


const Phieuxuatchitiet = () => {
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
              <h6 className="page-title">Phiếu Xuất Chi Tiết</h6>
            </div>

            <div className="card">
              <div className="card-body">
                {/* <!-- Fomt điền điều kiện lọc --> */}
                <form className="row g-3 needs-validation" noValidate>
                  {/* <!--Sản Phẩm--> */}
                  <div className="col-md-2">
                    <label htmlFor="maSanPham" className="form-label">
                      Mã Sản Phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="maSanPham"
                      required
                    />
                  </div>

                  <div className="col-md-2">
                    <label htmlFor="tenSanPham" className="form-label">
                      Tên Sản Phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="tenSanPham"
                      required
                    />
                  </div>
                  {/* <!--Loại Sản Phẩm--> */}
                  <div className="col-md-2">
                    <label htmlFor="maLoaiSanPham" className="form-label">
                      Mã Loại Sản Phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="maLoaiSanPham"
                      required
                    />
                  </div>

                  <div className="col-md-2">
                    <label htmlFor="tenLoaiSanPham" className="form-label">
                      Tên Loại Sản Phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="tenLoaiSanPham"
                      required
                    />
                  </div>
                  {/* <!--Phân Loại Sản Phẩm--> */}
                  <div className="col-md-2">
                    <label htmlFor="maPhanLoaiSanPham" className="form-label">
                      Mã Phân Loại Sản Phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="maPhanLoaiSanPham"
                      required
                    />
                  </div>

                  <div className="col-md-2">
                    <label htmlFor="tenPhanLoaiSanPham" className="form-label">
                      Tên Phân Loại Sản Phẩm
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="tenPhanLoaiSanPham"
                      required
                    />
                  </div>

                  {/* <!-- Chi Nhánh --> */}
                  <div className="col-md-3">
                    <label htmlFor="timChiNhanh" className="form-label">
                      Tìm Chi Nhánh
                    </label>
                    <select
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
                    </div>
                  </div>

                  {/* <!-- Từ Ngày Đến Ngày --> */}
                  <div className="col-md-2">
                    <label>Từ Ngày</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-md-2">
                    <label>Đến Ngày</label>
                    <input type="date" className="form-control" />
                  </div>

                  {/* <!-- Kho Hàng --> */}
                  <div className="col-md-3">
                    <label htmlFor="timKhoTheoChiNhanh" className="form-label">
                      Tìm Kho Theo Chi Nhánh
                    </label>
                    <select
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
                    <div className="invalid-feedback">Vui Lòng Chọn Kho...</div>
                  </div>

                  {/* <!--Mã Nhà Cung Cấp--> */}
                  <div className="col-md-2">
                    <label htmlFor="maNhaCungCap" className="form-label">
                      Mã Nhà Cung Cấp
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="maNhaCungCap"
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
                      id="tenNhaCungCap"
                      required
                    />
                  </div>
                  {/* <!--Kết Thúc Nhà Cung Cấp-->
                            <!--Hoá Đơn--> */}
                  <div className="col-md-2">
                    <label htmlFor="maHoaDon" className="form-label">
                      Mã Hoá Đơn
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="maHoaDon"
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
                      id="tenHoaDon"
                      required
                    />
                  </div>
                  {/* <!--Kết Hoá Đơn--> */}

                  {/* <!-- Loại Hoá Đơn --> */}
                  <div className="col-md-3">
                    <label htmlFor="timLoaiHoaDon" className="form-label">
                      Tìm Loại Hoá Đơn
                    </label>
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
                  </div>
                  {/* <!-- Kết Thúc Loại Hoá Đơn --> */}

                  {/* <!--Kết Thúc Tên Sản Phẩm--> */}

                  {/* <!--Kết Thúc Tên Sản Phẩm--> */}

                  <div>
                    <button
                      className="col-md-2 btn btn-primary mb-3"
                      type="button"
                      id="button-addon2"
                    >
                      <i className="fas fa-search"></i>
                      {/* <!-- Biểu tượng tìm kiếm Font Awesome --> */}
                    </button>
                  </div>

                  {/* <!--Nút Thêm Mới-->  */}
                  <div>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={toggleModal}
                    >
                      Thêm Mới
                    </button>
                  </div>
                  <Modal show={showModal} onHide={toggleModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Thêm Mới Phiếu Xuất</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* Form goes here */}
                      <form>
                        Mã Sản Phẩm:{" "}
                        <input
                          type="text"
                          id="maSanPham"
                          className="form-control"
                        />
                        <br />
                        Tên Sản Phẩm:{" "}
                        <input
                          type="text"
                          id="tenSanPham"
                          className="form-control"
                        />
                        <br />
                        Mã Loại Sản Phẩm:{" "}
                        <input
                          type="text"
                          id="maLoaiSanPham"
                          className="form-control"
                        />
                        <br />
                        Tên Loại Sản Phẩm:{" "}
                        <input
                          type="text"
                          id="tenLoaiSanPham"
                          className="form-control"
                        />
                        <br />
                        Mã Phân Loại Sản Phẩm:{" "}
                        <input
                          type="text"
                          id="maPhanLoaiSanPham"
                          className="form-control"
                        />
                        <br />
                        Tên Phân Loại Sản Phẩm:{" "}
                        <input
                          type="text"
                          id="tenPhanLoaiSanPham"
                          className="form-control"
                        />
                        <br />
                        Đơn Vị Tính 1:{" "}
                        <input
                          type="text"
                          id="donViTinh1"
                          className="form-control"
                        />
                        <br />
                        Đơn Vị Tính 2:{" "}
                        <input
                          type="text"
                          id="donViTinh2"
                          className="form-control"
                        />
                        <br />
                        Đơn Vị Tính 3:{" "}
                        <input
                          type="text"
                          id="donViTinh3"
                          className="form-control"
                        />
                        <br />
                        Đơn Vị Tính 4:{" "}
                        <input
                          type="text"
                          id="donViTinh4"
                          className="form-control"
                        />
                        <br />
                        {/*Đơn Giá: <input type="number" id="dongia" className="form-control" /><br />*/}
                        Hệ Số 1:{" "}
                        <input
                          type="text"
                          id="heSo1"
                          className="form-control"
                        />
                        <br />
                        Hệ Số 2:{" "}
                        <input
                          type="text"
                          id="heSo2"
                          className="form-control"
                        />
                        <br />
                        Hệ Số 3:{" "}
                        <input
                          type="text"
                          id="heSo3"
                          className="form-control"
                        />
                        <br />
                        Hệ Số 4:{" "}
                        <input
                          type="text"
                          id="heSo4"
                          className="form-control"
                        />
                        <br />
                        Điểm:{" "}
                        <input
                          type="number"
                          id="Diem"
                          className="form-control"
                        />
                        <br />
                        Số Ngày Cảnh Báo:{" "}
                        <input
                          type="number"
                          id="soNgayCanhBao"
                          className="form-control"
                        />
                        <br />
                        Ngày Tạo:{" "}
                        <input
                          type="date"
                          id="ngayTao"
                          className="form-control"
                        />
                        <br />
                        Hình Ảnh Sản Phẩm:{" "}
                        <div className="mb-5">
                          <form action="#" className="dropzone">
                            <div className="fallback">
                              <input
                                name="file"
                                type="file"
                                multiple="multiple"
                              />
                            </div>

                            <div className="dz-message needsclick"></div>
                          </form>
                          {/* <!-- end form --> */}
                        </div>
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
                </form>
                {/* <!-- Kết thúc fomt điền điều kiện lọc -->
                                <!-- Lưới Dữ Liệu --> */}

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
                        tableStyle={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', width:'2500px' }}
                        options={options}
                      >
                        <TableHeaderColumn dataField="id" isKey dataAlign="center" dataSort>Mã Sản Phẩm</TableHeaderColumn>
                        <TableHeaderColumn dataField="name" dataAlign="center" dataSort>Tên Sản Phẩm</TableHeaderColumn>
                        <TableHeaderColumn dataField="namePhanLoai" dataAlign="center" dataSort>Tên Phân Loại</TableHeaderColumn>
                        <TableHeaderColumn dataField="gia1" dataAlign="center" width="100px" dataSort>Giá 1</TableHeaderColumn>
                        <TableHeaderColumn dataField="donVi1" dataAlign="center" width="100px"  dataSort>Đơn Vị 1</TableHeaderColumn>
                        <TableHeaderColumn dataField="gia2" dataAlign="center" width="100px"  dataSort>Giá 2</TableHeaderColumn>
                        <TableHeaderColumn dataField="donVi2" dataAlign="center" width="100px"  dataSort>Đơn Vị 2</TableHeaderColumn>
                        <TableHeaderColumn dataField="gia3" dataAlign="center" width="100px"  dataSort>Giá 3</TableHeaderColumn>
                        <TableHeaderColumn dataField="donVi3" dataAlign="center" width="100px"  dataSort>Đơn Vị 3</TableHeaderColumn>
                        <TableHeaderColumn dataField="gia4" dataAlign="center" width="100px"  dataSort>Giá 4</TableHeaderColumn>
                        <TableHeaderColumn dataField="donVi4" dataAlign="center" width="100px"  dataSort>Đơn Vị 4</TableHeaderColumn>
                        <TableHeaderColumn dataField="diem" dataAlign="center" width="100px"  dataSort>Điểm</TableHeaderColumn>
                        <TableHeaderColumn dataField="soNgay" dataAlign="center" width="100px"  dataSort>Số Ngày</TableHeaderColumn>
                        <TableHeaderColumn dataField="hanSuDung" dataAlign="center"  dataSort>Hạn Sử Dụng</TableHeaderColumn>
                        <TableHeaderColumn dataField="maVach" dataAlign="center"  dataSort>Mã Vạch</TableHeaderColumn>
                        <TableHeaderColumn dataField="maQR" dataAlign="center"  dataSort>Mã QR</TableHeaderColumn>
                        <TableHeaderColumn dataField="note" dataAlign="center" dataSort>Ghi Chú</TableHeaderColumn>
                        <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort>Ngày Tạo</TableHeaderColumn>
                      </BootstrapTable>

                      {/* <!-- Kết Thúc Lưới Dữ Liệu --> */}
                    </div>
                    <hr />
                   
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

export default Phieuxuatchitiet;
