import React, { useState } from "react";
import "./styles.scss";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ReactPaginate from "react-paginate";

const Khohang = () => {
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
                  <table id="example-database datatable-buttons"
                         className="table table-striped table-bordered dt-responsive nowrap table table-editable table-nowrap align-middle table-edits"
                         style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                    <thead>
                      <tr>
                        <th><input type="checkbox" id="select-all" /></th>
                        <th>STT</th>
                        <th>Mã Chi Nhánh</th>
                        <th>Tên Chi Nhánh</th>
                        <th>Mã Kho Hàng</th>
                        <th>Tên Kho Hàng</th>
                        <th>Địa Chỉ Kho Hàng</th>
                        <th>Ghi Chú</th>
                        <th>Ngày Tạo</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Đây là nơi bạn sẽ lặp qua dữ liệu của mình và tạo các hàng */}
                    </tbody>
                  </table>
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
      <ReactPaginate
                    breakLabel="..."
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    nextLabel="next >"
                    pageCount={10}
                    previousLabel="< previous"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                  />
    </div>
  );
};

export default Khohang;
