/* global $, QRCode */
import React, { useState } from "react";
import { products } from './datasanpham';
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
import QRCode from 'qrcode';

async function qrCodeFormatter(cell, row) {
  try {
    const qrCodeImage = await QRCode.toDataURL(row.id);
    return `<img src="${qrCodeImage}" alt="QR Code" />`;
  } catch (err) {
    console.error(err);
    return 'Không thể tạo mã QR';
  }
}

// Thêm nút sinh QR
const generateQRButton = (cell, row) => {
  return `<button onClick={this.qrCodeFormatter(${row.id})}>Sinh QR</button>`;
}

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
        <Modal.Title>Snar Phẩm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form>
                          Mã Sản Phẩm:
                          <input
                            type="text"
                            id="maSanPham"
                            className="form-control"
                          />
                          <br />
                          Tên Sản Phẩm:
                          <input
                            type="text"
                            id="tenSanPham1"
                            className="form-control"
                          />
                          <br />
                          Tên Mã Vạch:
                          <input
                            type="text"
                            id="tenSanPham2"
                            className="form-control"
                          />
                          <br />
                          Hệ Số 1:
                          <input
                            type="text"
                            id="tenSanPham3"
                            className="form-control"
                          />
                          <br />
                          Hệ Số 2:
                          <input
                            type="text"
                            id="tenSanPham4"
                            className="form-control"
                          />
                          <br />
                          Hệ Số 3:
                          <input
                            type="text"
                            id="tenSanPham5"
                            className="form-control"
                          />
                          <br />
                          Hệ Số 4:
                          <input
                            type="text"
                            id="tenSanPham6"
                            className="form-control"
                          />
                          <br />
                          {/* <!--Đơn Giá: <input type="number" id="dongia" class="form-control"><br>--> */}
                          Ngày Tạo:
                          <input
                            type="date"
                            id="ngay"
                            className="form-control"
                          />
                          <br />
                          Hình Ảnh:
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
                          Ghi Chú:
                          <textarea
                            className="form-control"
                            id="elm1"
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


const Sanpham = () => {

  var selectRowProp = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "rgb(238, 193, 213)" 
  };

//thêm
// import { Form } from 'antd';
// import SanPhamAPI from "../../services/sanPham";


  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const openPage = (pageName) => {
    // Ẩn tất cả các phần tử có class="tabcontent"
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Hiển thị phần tử tương ứng với nút được nhấn
    document.getElementById(pageName).style.display = "block";
  };

  // const [form] = Form.useForm();
  // const handleSubmitCreate = (values) => {
  //   // Lấy dữ liệu từ form
  //   const payload = {
  //     "categorizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "manufacturerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "productCode": "string",
  //     "productName": "string",
  //     "productImage": "string",
  //     "productScore": 0,
  //     "unit1Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "unit2Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "unit3Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "unit4Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "coefficient1": 0,
  //     "coefficient2": 0,
  //     "coefficient3": 0,
  //     "barcode": "string",
  //     "notes": "string"
  //   }
  //   SanPhamAPI.createSanPham(payload)
  //     .then(response => {
  //       console.log("🚀 ~ file: index.jsx:32 ~ SanPhamAPI.createSanPham ~ response:", response)
  //     })
  //     .catch(error => {
  //       console.log("🚀 ~ file: index.jsx:36 ~ handleSubmit ~ error:", error)
  //     });
  // };

  // const handleDelete = (id) => {

  //   SanPhamAPI.deleteSanPham(id)
  //     .then(response => {
  //       console.log("🚀 ~ file: index.jsx:61 ~ handleDelete ~ response:", response)
  //     })
  //     .catch(error => {
  //       console.log("🚀 ~ file: index.jsx:65 ~ handleDelete ~ error:", error)
  //     });
  // };

  // const handleSubmitUpdate = (id, values) => {
  //   // Lấy dữ liệu từ form
  //   const payload = {
  //     "categorizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "manufacturerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "productCode": "string",
  //     "productName": "string",
  //     "productImage": "string",
  //     "productScore": 0,
  //     "unit1Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "unit2Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "unit3Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "unit4Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "coefficient1": 0,
  //     "coefficient2": 0,
  //     "coefficient3": 0,
  //     "barcode": "string",
  //     "notes": "string"
  //   }
  //   SanPhamAPI.updateSanPham(id, payload)
  //     .then(response => {
  //       console.log("🚀 ~ file: index.jsx:89 ~ handleSubmitUpdate ~ response:", response)
  //     })
  //     .catch(error => {
  //       console.log("🚀 ~ file: index.jsx:93 ~ handleSubmitUpdate ~ error:", error)
  //     });
  // };
  // //sự kiện cho nút kích chọn dòng, chọn tất cả hoặc chọn từng dòng 1
  //   document.addEventListener('DOMContentLoaded', function () {
  //     // Lấy tham chiếu đến các phần tử
  //     const selectAllCheckbox = document.getElementById('select-all1');
  //     const rowCheckboxes = document.querySelectorAll('.row-checkbox1');

  //     // Xử lý sự kiện khi nút tích tất cả được nhấp
  //     selectAllCheckbox.addEventListener('change', function () {
  //         rowCheckboxes.forEach(checkbox => {
  //             checkbox.checked = this.checked;
  //         });
  //     });
  // });

  // //sự kiện cho nút kích chọn dòng, chọn tất cả hoặc chọn từng dòng 2
  //     document.addEventListener('DOMContentLoaded', function () {
  //                 // Lấy tham chiếu đến các phần tử
  //                 const selectAllCheckbox = document.getElementById('select-all2');
  //                 const rowCheckboxes = document.querySelectorAll('.row-checkbox2');

  //                 // Xử lý sự kiện khi nút tích tất cả được nhấp
  //                 selectAllCheckbox.addEventListener('change', function () {
  //                     rowCheckboxes.forEach(checkbox => {
  //                         checkbox.checked = this.checked;
  //                     });
  //                 });
  //             });
  //    //Số thứ tự tăng dần
  //    // Lấy danh sách tất cả các hàng
  //    const rows = document.querySelectorAll("tr[data-id]");

  //    // Lặp qua từng hàng để cập nhật số thứ tự
  //    rows.forEach((row, index) => {
  //        const rowNumberElement = row.querySelector(".row-number");
  //        if (rowNumberElement) {
  //            rowNumberElement.textContent = index + 1;
  //        }
  //    });
  //    //sự kiện chọn field
  //    function openPage(pageName) {
  //     // Ẩn tất cả các phần tử có class="tabcontent"
  //     var i, tabcontent;
  //     tabcontent = document.getElementsByClassName("tabcontent");
  //     for (i = 0; i < tabcontent.length; i++) {
  //       tabcontent[i].style.display = "none";
  //     }

  //     // Hiển thị phần tử tương ứng với nút được nhấn
  //     document.getElementById(pageName).style.display = "block";
  //   }
  //   // Sự kiện click cho nút "In mã QR"
  // $('.qr-code').off('click').on('click', function() {
  //   // Lấy mã sản phẩm từ dòng được chọn
  //   var productCode = $(this).closest('tr').find('td[data-field="name"]').text();

  //   // Xóa mã QR cũ
  //   $("#qrCode").empty();

  //   // Tạo mã QR từ mã sản phẩm
  //   var qrCode = new QRCode(document.getElementById("qrCode"), {
  //     text: productCode,
  //     width: 128,
  //     height: 128
  //   });

  //   // Hiển thị cửa sổ modal
  //   $('#qrModal').modal('show');
  // });
  // //in mã QR
  // $(document).ready(function() {
  //   // Sự kiện click cho nút "In" trong cửa sổ modal mã QR
  //   $('#qrModal .btn-primary').click(function() {
  //     window.print();
  //   });

  //   // Sự kiện click cho nút "In" trong cửa sổ modal mã QR hàng loạt
  //   $('#qrModal2 .btn-primary').click(function() {
  //     window.print();
  //   });
  // });
  const handlePageClick = () => {};

  return (
    <div className="main-content">
      <div className="row align-items-center">
        <div className="page-content">
          <div className="container-fluid">
            <div className="col-md-8">
              <h5 className="page-title">Sản Phẩm</h5>
            </div>
            <div className="card">
              <div className="card-body">
                {/* <!-- Fomt điền điều kiện lọc --> */}
                <div id="filter-form">
                  <form className="row g-3 needs-validation" noValidate>
                    {/* <!--Mã Sản Phẩm--> */}
                    <div className="col-md-2">
                      <label
                        htmlFor="validationCustom03"
                        className="form-label"
                      >
                        Mã Loại Sản Phẩm
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="validationCustom03"
                        required
                      />
                    </div>
                    {/* <!--Kết Thúc Mã Sản Phẩm--> */}
                    {/* <!--Tên Sản Phẩm--> */}
                    <div className="col-md-2">
                      <label
                        htmlFor="validationCustom04"
                        className="form-label"
                      >
                        Tên Loại Sản Phẩm
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="validationCustom04"
                        required
                      />
                    </div>
                    {/* <!--Kết Thúc Tên Sản Phẩm--> */}
                  </form>{" "}
                  {/* Added closing tag */}
                  {/* <!-- Fomt điền điều kiện lọc --> */}
                  <form className="row g-3 needs-validation" noValidate>
                    {/* <!--Mã Sản Phẩm--> */}
                    <div className="col-md-2">
                      <label
                        htmlFor="validationCustom05"
                        className="form-label"
                      >
                        Mã Phân Loại Sản Phẩm
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="validationCustom05"
                        required
                      />
                    </div>
                    {/* <!--Kết Thúc Mã Sản Phẩm--> */}
                    {/* <!--Tên Sản Phẩm--> */}
                    <div className="col-md-2">
                      <label
                        htmlFor="validationCustom06"
                        className="form-label"
                      >
                        Tên Phân Loại Sản Phẩm
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="validationCustom06"
                        required
                      />
                    </div>
                    {/* <!--Kết Thúc Tên Sản Phẩm--> */}
                  </form>{" "}
                  {/* Added closing tag */}
                  {/* <!-- Fomt điền điều kiện lọc --> */}
                  <form className="row g-3 needs-validation" noValidate>
                    {/* <!--Mã Sản Phẩm--> */}
                    <div className="col-md-2">
                      <label
                        htmlFor="validationCustom07"
                        className="form-label"
                      >
                        Mã Sản Phẩm
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="validationCustom07"
                        required
                      />
                    </div>
                    {/* <!--Kết Thúc Mã Sản Phẩm--> */}
                    {/* <!--Tên Sản Phẩm--> */}
                    <div className="col-md-2">
                      <label
                        htmlFor="validationCustom08"
                        className="form-label"
                      >
                        Tên Loại Sản Phẩm
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="validationCustom08"
                        required
                      />
                    </div>
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
                    {/* <!--font hiển thị popup--> */}
                    <Modal show={showModal} onHide={toggleModal}>
                      <Modal.Header closeButton>
                        <Modal.Title>Thêm Mới Danh Mục Sản Phẩm</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          Mã Sản Phẩm:
                          <input
                            type="text"
                            id="maSanPham"
                            className="form-control"
                          />
                          <br />
                          Tên Sản Phẩm:
                          <input
                            type="text"
                            id="tenSanPham1"
                            className="form-control"
                          />
                          <br />
                          Tên Mã Vạch:
                          <input
                            type="text"
                            id="tenSanPham2"
                            className="form-control"
                          />
                          <br />
                          Hệ Số 1:
                          <input
                            type="text"
                            id="tenSanPham3"
                            className="form-control"
                          />
                          <br />
                          Hệ Số 2:
                          <input
                            type="text"
                            id="tenSanPham4"
                            className="form-control"
                          />
                          <br />
                          Hệ Số 3:
                          <input
                            type="text"
                            id="tenSanPham5"
                            className="form-control"
                          />
                          <br />
                          Hệ Số 4:
                          <input
                            type="text"
                            id="tenSanPham6"
                            className="form-control"
                          />
                          <br />
                          {/* <!--Đơn Giá: <input type="number" id="dongia" class="form-control"><br>--> */}
                          Ngày Tạo:
                          <input
                            type="date"
                            id="ngay"
                            className="form-control"
                          />
                          <br />
                          Hình Ảnh:
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
                          Ghi Chú:
                          <textarea
                            className="form-control"
                            id="elm1"
                            name="area"
                          ></textarea>
                          <br />
                          <button type="submit" className="btn btn-success">
                            Lưu
                          </button>
                        </form>
                      </Modal.Body>
                    </Modal>
                    {/* <!--Kết Thúc font hiển thị popup--> */}
                    {/* <!-- in mã QR --> */}
                    {/* <!-- Modal --> */}
                    <Modal show={showModal} onHide={toggleModal}>
                      <Modal.Header closeButton>
                        <Modal.Title>In mã QR</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="d-flex flex-column align-items-center">
                        {/* <!-- QR Code goes here --> */}
                        <div id="qrCode" className="mb-3"></div>
                        {/* <!-- Product information goes here --> */}
                        <div
                          id="productInfo"
                          className="text-center mb-3"
                        ></div>
                        {/* <!-- Logo goes here --> */}
                        <div id="logo" className="mb-3">
                          <img
                            src="/Src/MeXiu.WebsiteAdmin/MeXiu.WebsiteAdmin/assets/images/favicon.ico"
                            alt="Logo"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </div>
                        {/* <!-- Input for quantity --> */}
                        <div className="mb-3 w-50">
                          <label htmlFor="quantity" className="form-label">
                            Số lượng cần in
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="quantity"
                          />
                        </div>
                      </Modal.Body>
                      <Modal.Footer className="justify-content-center">
                        <Button variant="secondary" onClick={toggleModal}>
                          Đóng
                        </Button>
                        <Button variant="primary">In</Button>
                      </Modal.Footer>
                    </Modal>

                    {/* <!-- Fomt riêng Xuất Mã QR cho từng dòng --> */}
                    {/* <!-- Modal --> */}
                    <Modal show={showModal} onHide={toggleModal}>
                      <Modal.Header closeButton>
                        <Modal.Title>Xuất Mã QR Hàng Loạt</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="d-flex flex-column align-items-center">
                          {/* <!-- QR Code goes here --> */}
                          <div id="qrCode2" className="mb-3"></div>
                          {/* <!-- Product information goes here --> */}
                          <div id="productInfo2" className="text-center"></div>
                          {/* <!-- Input for quantity --> */}
                          <div className="mb-3">
                            <label htmlFor="quantity2" className="form-label">
                              Số lượng cần in
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="quantity2"
                            />
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer className="justify-content-center">
                        <Button variant="secondary" onClick={toggleModal}>
                          Đóng
                        </Button>
                        <Button variant="primary">In</Button>
                      </Modal.Footer>
                    </Modal>
                    {/* <!-- Kết thúc Fomt Sinh Mã QR cho từng dòng --> */}
                    {/* <div>
                      <button
                        type="button"
                        className="btn btn-success mr-2"
                        onClick={toggleModal}
                      >
                        <i className="fas fa-plus-circle"></i> Thêm Mới
                      </button>
                      <button
                        type="button"
                        className="btn btn-success"
                        id="exportQrCode"
                      >
                        <i className="fas fa-qrcode"></i> Xuất Mã QR Hàng Loạt
                      </button>
                    </div> */}
                  </form>
                </div>
                {/* <!-- Kết thúc fomt điền điều kiện lọc --> */}
                <hr />
                {/* <!-- Lưới Dữ Liệu --> */}
                <div id="data-grid">
                  <div
                    className="btn-group mt-3"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => openPage("BanSanPham")}
                    >
                      {" "}
                      Bảng Số Lượng Sản Phẩm{" "}
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => openPage("BanSanPhamChiTiet")}
                    >
                      Bảng Sản Phẩm Chi Tiết
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div id="BanSanPham" className="tabcontent">
                        <div className="table-responsive">
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
                            <TableHeaderColumn dataField="id" isKey dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Mã Sản Phẩm</TableHeaderColumn>
                            <TableHeaderColumn dataField="name" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Tên Sản Phẩm</TableHeaderColumn>
                            <TableHeaderColumn dataField="type" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Loại Sản Phẩm</TableHeaderColumn>
                            <TableHeaderColumn dataField="subtype" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Phân Loại</TableHeaderColumn>
                            <TableHeaderColumn dataField="quantity" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Số Lượng Hiện Tại</TableHeaderColumn>
                            <TableHeaderColumn dataField="cost" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Giá Vốn</TableHeaderColumn>
                            <TableHeaderColumn dataField="price1" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Giá 1</TableHeaderColumn>
                            <TableHeaderColumn dataField="unit1" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Đơn Vị Tính 1</TableHeaderColumn>
                            <TableHeaderColumn dataField="ratio1" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Hệ Số 1</TableHeaderColumn>
                            <TableHeaderColumn dataField="price2" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Giá 2</TableHeaderColumn>
                            <TableHeaderColumn dataField="unit2" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Đơn Vị Tính 2</TableHeaderColumn>
                            <TableHeaderColumn dataField="ratio2" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Hệ Số 2</TableHeaderColumn>
                            <TableHeaderColumn dataField="price3" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Giá 3</TableHeaderColumn>
                            <TableHeaderColumn dataField="unit3" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Đơn Vị Tính 3</TableHeaderColumn>
                            <TableHeaderColumn dataField="ratio3" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Hệ Số 3</TableHeaderColumn>
                            <TableHeaderColumn dataField="price4" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Giá 4</TableHeaderColumn>
                            <TableHeaderColumn dataField="unit4" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Đơn Vị Tính 4</TableHeaderColumn>
                            <TableHeaderColumn dataField="ratio4" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Hệ Số 4</TableHeaderColumn>
                            <TableHeaderColumn dataField="note" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Ghi Chú</TableHeaderColumn>
                            <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Ngày Tạo</TableHeaderColumn>
                            <TableHeaderColumn dataField="warehouse" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Kho</TableHeaderColumn>
                            
                            <TableHeaderColumn dataField="qrCode" dataAlign="center" dataFormat={generateQRButton} columnClassName="my-custom-class" headerAlign='center'>Mã QR</TableHeaderColumn>
                          </BootstrapTable>
                        </div>
                        {/* <!-- Kết Thúc Lưới Dữ Liệu --> */}
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div
                        id="BanSanPhamChiTiet"
                        className="tabcontent"
                        style={{ display: "none" }}
                      >
                        <div className="table-responsive">
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
                            <TableHeaderColumn dataField="id" isKey dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Mã Sản Phẩm</TableHeaderColumn>
                            <TableHeaderColumn dataField="name" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Tên Sản Phẩm</TableHeaderColumn>
                            <TableHeaderColumn dataField="type" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Loại Sản Phẩm</TableHeaderColumn>
                            <TableHeaderColumn dataField="subtype" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Phân Loại</TableHeaderColumn>
                            <TableHeaderColumn dataField="points" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Điểm</TableHeaderColumn>
                            <TableHeaderColumn dataField="warningDays" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Số Ngày Cảnh Báo</TableHeaderColumn>
                            <TableHeaderColumn dataField="unit1" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Đơn Vị Tính 1</TableHeaderColumn>
                            <TableHeaderColumn dataField="ratio1" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Hệ Số 1</TableHeaderColumn>
                            <TableHeaderColumn dataField="unit2" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Đơn Vị Tính 2</TableHeaderColumn>
                            <TableHeaderColumn dataField="ratio2" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Hệ Số 2</TableHeaderColumn>
                            <TableHeaderColumn dataField="unit3" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Đơn Vị Tính 3</TableHeaderColumn>
                            <TableHeaderColumn dataField="ratio3" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Hệ Số 3</TableHeaderColumn>
                            <TableHeaderColumn dataField="unit4" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Đơn Vị Tính 4</TableHeaderColumn>
                            <TableHeaderColumn dataField="ratio4" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Hệ Số 4</TableHeaderColumn>
                            <TableHeaderColumn dataField="note" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Ghi Chú</TableHeaderColumn>
                            <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort columnClassName="my-custom-class" headerAlign='center'>Ngày Tạo</TableHeaderColumn>
                           
                            <TableHeaderColumn dataField="qrCode" dataAlign="center" dataFormat={generateQRButton} columnClassName="my-custom-class" headerAlign='center'>Mã QR</TableHeaderColumn>
                          </BootstrapTable>
                        </div>
                      </div>
                      {/* <!-- Kết Thúc Lưới Dữ Liệu --> */}
                    </div>
              
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Hết--> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sanpham;
