import React, { useState } from "react";
import { donvitinh } from './datadonvitinh.js';
import "./styles.scss";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
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


let lastId = donvitinh.length > 0 ? parseInt(donvitinh[donvitinh.length - 1].id) : 0;

const createCustomModal = (onModalClose, onSave, columns, validateState, ignoreEditable) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission goes here
    // Tự sinh mã KH
    lastId++;
    // Lưu dữ liệu ảo và hiển thị trên lưới dữ liệu
    const newCustomer = {
      id: lastId.toString(),
      tenDonViTinh: document.getElementById("tenDonViTinh").value,
      dateCreate: document.getElementById("ngayTao").value
    };
    donvitinh.push(newCustomer);
    // Lưu dữ liệu vào localStorage
    localStorage.setItem('donvitinh', JSON.stringify(donvitinh));
    onSave(event);
  };

  return (
    <Modal show={true} onHide={onModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm Mới Đơn Vị Tính</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleFormSubmit}>
          Mã Đơn vị Tính: <input type="text" id="maDonViTinh" className="form-control" value={lastId} readOnly /><br />
          Tên Đơn Vị Tính: <input type="text" id="tenDonViTinh" className="form-control" /><br />
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

const Donvitinh = () => {
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
  // const handlePageClick = () => {};

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
            <h4 className="page-title">Danh Mục Đơn Vị Tính</h4>
            <div className="card">
              <div className="card-body">
                
              <div className="row">
                  {/* <!--Mã Sản Phẩm--> */}
                  <div className="col-md-2">
                    <label>Mã Đơn Vị Tính</label>
                    <input type="text" className="form-control" placeholder="Nhập Mã DVT" id="maDonViTinh" />
                  </div>
                  {/* <!--Kết Thúc Mã Sản Phẩm--> */}
                  {/* <!--Tên Sản Phẩm--> */}
                  <div className="col-md-2">
                    <label>Tên Đơn Vị Tính</label>
                    <input type="text" className="form-control" placeholder="Nhập Tên DVT" id="tenDonViTinh" />
                  </div>
                  {/* <!--Kết Thúc Tên Sản Phẩm--> */}

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
                  {/* <!--font hiển thị popup--> */}
                  <Modal show={showModal} onHide={toggleModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Thêm Mới Đơn Vị Tính</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form>
                        Mã Đơn Vị Tính: <input type="text" id="maDonViTinh" className="form-control" /><br />
                        Tên Đơn Vị Tính: <input type="text" id="tenDonViTinh" className="form-control" /><br />
                        Ngày Tạo: <input type="text" id="dateCreate" className="form-control" /><br />
                        <button type="submit" className="btn btn-success">Lưu</button>
                      </form>
                    </Modal.Body>
                  </Modal>
                  {/* <!--Kết Thúc font hiển thị popup--> */}

                  {/* <!-- font hiển thị popup sửa --> */}
                  <Modal show={editModal} onHide={toggleEditModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Sửa Đơn Vị Tính</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form>
                      Mã Đơn Vị Tính: <input type="text" id="maDonViTinh" className="form-control" /><br />
                      Tên Đơn Vị Tính: <input type="text" id="tenDonViTinh" className="form-control" /><br />
                      Ngày Tạo: <input type="text" id="dateCreate" className="form-control" /><br />
                      <button type="submit" className="btn btn-success">Lưu</button>
                    </form>
                  </Modal.Body>
                </Modal>
                {/* <!-- Kết Thúc font hiển thị popup sửa --> */}
                {/* <!-- Lưới Dữ Liệu --> */}


                <BootstrapTable
                    data={donvitinh}
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
                    <TableHeaderColumn dataField="id" isKey dataAlign="center" dataSort>Mã Đơn vị Tính</TableHeaderColumn>
                    <TableHeaderColumn dataField="tenDonViTinh" dataAlign="center" dataSort>Tên Đơn vị tính</TableHeaderColumn>
                    <TableHeaderColumn dataField="dateCreate" dataAlign="center" dataSort>Ngày Tạo</TableHeaderColumn>
                    
                  </BootstrapTable>

                </div>
              </div>
            </div>
          </div>
            {/* <!-- end col --> */}
        </div>
          {/* <!-- end row --> */}
      
      </div>
    </div>
  );
};

export default Donvitinh;
