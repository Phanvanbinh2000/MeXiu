import React, { useState } from "react";
import { products } from './datakhohang';
import "./styles.scss";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
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
        <Modal.Title>Thêm Mới Kho Hàng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form>
            Chi Nhánh: <input type="text" id="tenchinhanh" className="form-control" /><br />
            Mã Kho Hàng: <input type="text" id="makhohang" className="form-control" /><br />
            Tên Kho Hàng: <input type="text" id="tenkhohang" className="form-control" /><br />
            Số Điện Thoại Kho Hàng: <input type="text" id="phone" className="form-control" /><br />
            Địa Chỉ Kho: <input type="text" id="diachikho" className="form-control" /><br />
            Ngày Tạo: <input type="date" id="ngay" className="form-control" /><br />
            Ghi Chú: <textarea className="form-control" id="elm1" name="area"></textarea><br />
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


const Khohang = () => {

  var selectRowProp = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "rgb(238, 193, 213)" 
  };


  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handlePageClick = () => {

  };

  return (
    <div className="main-content">
      <div className="row align-items-center">
        <div className="page-content">
          <div className="container-fluid">
            <div className="col-md-8">
              <h4 className="page-title">Kho Hàng</h4>
            </div>
            <div className="card">
              <div className="card-body">
                <form className="row g-3 needs-validation" novalidate>
                  <div className="col-md-2">
                    <label for="validationCustom03" className="form-label">Mã Kho Hàng</label>
                    <input type="text" className="form-control form-control-sm" id="makhohang" required />
                  </div>
                  <div className="col-md-2">
                    <label for="validationCustom03" className="form-label">Tên Kho Hàng</label>
                    <input type="text" className="form-control form-control-sm" id="tenkhohang" required />
                  </div>
                  <div>
                    <button className="col-md-2 btn btn-primary mb-3" type="button" id="button-addon2">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                  <div>
                    <button type="button" className="btn btn-success" onClick={toggleModal}>
                      Thêm Mới
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="card mt-4">
              
                <div className="table-responsive card-body">
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
                    <TableHeaderColumn dataField="id" isKey dataAlign="center" dataSort>Mã SP</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataAlign="center" dataSort>Tên SP</TableHeaderColumn>
                    <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort>Số lượng đầu kỳ</TableHeaderColumn>
                    <TableHeaderColumn dataField="createdDate" dataAlign="center" dataSort>Số lượng đầu kỳ 2</TableHeaderColumn>
                    <TableHeaderColumn dataField="quantityIn" dataAlign="center" dataSort>Số lượng nhập trong kỳ</TableHeaderColumn>
                    <TableHeaderColumn dataField="quantityOut" dataAlign="center" dataSort>Số lượng xuất trong kỳ</TableHeaderColumn>
                    <TableHeaderColumn dataField="remaining" dataAlign="center" dataSort>Số lượng còn lại</TableHeaderColumn>
                    <TableHeaderColumn dataField="costPrice" dataAlign="center" dataSort>Giá vốn</TableHeaderColumn>
                    <TableHeaderColumn dataField="totalMoney" dataAlign="center" dataSort>Thành tiền</TableHeaderColumn>
                    <TableHeaderColumn dataField="salePrice" dataAlign="center" dataSort>Giá bán</TableHeaderColumn>
                    <TableHeaderColumn dataField="totalSale" dataAlign="center" dataSort>Tổng tiền bán</TableHeaderColumn>
                    <TableHeaderColumn dataField="warehouse" dataAlign="center" dataSort>Kho</TableHeaderColumn>
                  </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={toggleModal} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Thêm Mới Kho Hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            Chi Nhánh: <input type="text" id="tenchinhanh" className="form-control" /><br />
            Mã Kho Hàng: <input type="text" id="makhohang" className="form-control" /><br />
            Tên Kho Hàng: <input type="text" id="tenkhohang" className="form-control" /><br />
            Số Điện Thoại Kho Hàng: <input type="text" id="phone" className="form-control" /><br />
            Địa Chỉ Kho: <input type="text" id="diachikho" className="form-control" /><br />
            Ngày Tạo: <input type="date" id="ngay" className="form-control" /><br />
            Ghi Chú: <textarea className="form-control" id="elm1" name="area"></textarea><br />
            <button type="submit" className="btn btn-success">Lưu</button>
          </form>
        </Modal.Body>
      </Modal>
      <hr />
      
    </div>
  );
};

export default Khohang;
