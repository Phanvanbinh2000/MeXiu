import React, { useState } from "react";
import "./styles.scss";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ReactPaginate from "react-paginate";

const Loaisanpham = () => {
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
            <h6 className="page-title">Danh Mục Loại Sản Phẩm</h6>
          </div>
          <div className="card">
            <div className="card-body">
              {/* <!-- Fomt điền điều kiện lọc --> */}
              <form className="row g-3 needs-validation" noValidate>
                {/* <!--Mã Sản Phẩm--> */}
                <div className="col-md-2">
                  <label htmlFor="maSanPham" className="form-label">Mã Sản Phẩm</label>
                  <input type="text" className="form-control form-control-sm" id="maSanPham" required />
                </div>
                {/* <!--Kết Thúc Mã Sản Phẩm--> */}
                {/* <!--Tên Sản Phẩm--> */}
                <div className="col-md-2">
                  <label htmlFor="tenSanPham" className="form-label">Tên Sản Phẩm</label>
                  <input type="text" className="form-control form-control-sm" id="tenSanPham" required />
                </div>
                {/* <!--Kết Thúc Tên Sản Phẩm--> */}
                <div>
                  <button className="col-md-2 btn btn-primary mb-3" type="button" id="button-addon2">
                    <i className="fas fa-search"></i>
                    {/* <!-- Biểu tượng tìm kiếm Font Awesome --> */}
                  </button>
                </div>
              </form>
              {/* <!--font hiển thị popup--> */}
              {/* <!-- Font hiển thị popup --> */}
              <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Thêm Mới Loại Sản Phẩm</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                      </button>
                    </div>
                    <div className="modal-body">
                      <form id="loaiSPForm">
                        <label htmlFor="MaLoai">Mã loại sản phẩm:</label>
                        <input type="text" id="MaLoai" className="form-control" />
                        <br />
                        <label htmlFor="TenLoai">Tên loại sản phẩm:</label>
                        <input type="text" id="TenLoai" className="form-control" />
                        <br />
                        <label htmlFor="elm1">Ghi Chú:</label>
                        <textarea className="form-control" id="notes" name="area">
                        </textarea>
                        <br />
                        <button type="submit" className="btn btn-success">Lưu</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Kết Thúc font hiển thị popup --> */}
              {/* <!--Kết Thúc font hiển thị popup--> */}
              {/* <!--Nút Thêm Mới--> */}
              <div>
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal">Thêm Mới</button>
              </div>
              {/* <!--Kết Thúc nút Thêm Mới--> */}
              {/* <!-- Kết thúc fomt điền điều kiện lọc --> */}
              {/* <!-- Lưới Dữ Liệu --> */}
              <div className="card-body">
                <div className="row">
                  <div className="table-responsive col-md-2 card-body">
                    <table id="example-database" className="table table-striped table-bordered dt-responsive nowrap table table-editable table-nowrap align-middle table-edits" style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                      <thead>
                        <tr>
                          <th>
                            <input type="checkbox" id="select-all" />
                          </th>
                          <th>STT</th>
                          <th>Mã Loại SP</th>
                          <th>Tên Loại SP</th>
                          <th>Ngày Tạo</th>
                          <th>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* <!-- Dữ liệu từ API sẽ được thêm vào đây --> */}
                        <tr>...
                          <td>
                            <button className="btn btn-secondary btn-sm edit" title="Edit">
                              <i className="fas fa-pencil-alt"></i>
                            </button>
                            <button className="btn btn-danger btn-sm delete" title="Delete">
                              <i className="fas fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* <!-- Kết Thúc Lưới Dữ Liệu --> */}
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

export default Loaisanpham;
