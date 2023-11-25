import React, { useState } from "react";
import { products } from './datatonkho';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
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

  
}
const cellEditProp = {
  mode: 'dbclick', // Chế độ chỉnh sửa khi nhấp vào ô
  blurToSave: true, // Lưu khi bỏ focus khỏi ô đang chỉnh sửa
};

const options = {
  insertModal: createCustomModal
};


const Tonkho = () => {

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
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h5>Tồn Kho</h5>
          <div className="card">
            <div className="card-body">
              <form className="row g-3 needs-validation" novalidate>
                <div className="col-md-3">
                  <label for="validationCustom03" className="form-label">
                    Mã - Tên Hóa đơn
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="hoadon"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label for="validationCustom03" className="form-label">
                    Loại sản phẩm
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="loaisanpham"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label for="validationCustom03" className="form-label">
                    Phân loại sản phẩm
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="phanloaisanpham"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label for="validationCustom03" className="form-label">
                    Tên Sản Phẩm
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="tensanpham"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label for="validationCustom04" className="form-label">
                    Chi Nhánh
                  </label>
                  <select
                    className="form-select form-select-sm"
                    id="validationCustom04"
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
                <div className="col-md-3">
                  <label for="validationCustom04" className="form-label">
                    Tên Kho
                  </label>
                  <select
                    className="form-select form-select-sm"
                    id="validationCustom04"
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
                <div className="col-md-3">
                  <label for="validationCustom03" className="form-label">
                    Tên Hãng sản xuất
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="hangsanxuat"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label for="validationCustom03" className="form-label">
                    Tên Nhà Cung Cấp
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="nhacungcap"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label for="validationCustom03" className="form-label">
                    Từ ngày
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-sm"
                    id="ngaynhaptungay"
                    required
                  />
                </div>
                <div className="col-md-3">
                  <label for="validationCustom03" className="form-label">
                    Đến ngày
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-sm"
                    id="ngaynhapdenngay"
                    required
                  />
                </div>

                <div className="col-md-2">
                  <button
                    className="btn btn-primary w-100 mb-3"
                    type="button"
                    id="button-addon2"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <div className="table-responsive">
                <BootstrapTable
                  data={products}
                  selectRow={selectRowProp}
                  striped
                  hover
                  condensed
                  pagination
                  
                  cellEdit={cellEditProp}
                  deleteRow
                  search
                  tableStyle={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}
                  options={options}
                >
                  <TableHeaderColumn dataField="id" isKey dataAlign="center" dataSort>Mã SP</TableHeaderColumn>
                  <TableHeaderColumn dataField="name" dataAlign="center" dataSort>Tên SP</TableHeaderColumn>
                  <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort>Số lượng đầu kỳ</TableHeaderColumn>
                  <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort>Số lượng đầu kỳ 2</TableHeaderColumn>
                  <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort>Số lượng nhập trong kỳ</TableHeaderColumn>
                  <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort>Số lượng xuất trong kỳ</TableHeaderColumn>
                  <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort>Số lượng còn lại</TableHeaderColumn>
                  <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort>Giá vốn</TableHeaderColumn>
                  <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort>Thành tiền</TableHeaderColumn>
                  <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort>Giá bán</TableHeaderColumn>
                  <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort>Tổng tiền bán</TableHeaderColumn>
                  <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort>Kho</TableHeaderColumn>
                </BootstrapTable>
           
            {/*  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tonkho;
