import React, { useState } from "react";
import "./styles.scss";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ReactPaginate from "react-paginate";

const handlePageClick = () => {};

const Nhomkhachhang = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="main-content">
      <div className="row align-items-center">
        <div className="page-content">
          <div className="container-fluid">
            <div className="col-md-8">
              <h6 className="page-title">Nhóm Khách Hàng</h6>
            </div>
            <div className="card">
              <div className="card-body">
                {/* <!-- Fomt điền điều kiện lọc --> */}
                <form className="row g-3 needs-validation" noValidate>
                  {/*Mã Nhóm Khách hàng*/}
                  <div className="col-md-2">
                    <label htmlFor="maNhom" className="form-label">
                      Mã Nhóm
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="maNhom"
                      required
                    />
                  </div>
                  {/*Kết Mã Nhóm Khách hàng*/}
                  {/*Tên Nhóm Khách hàng*/}
                  <div className="col-md-2">
                    <label htmlFor="tenNhom" className="form-label">
                      Tên Nhóm
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="tenNhom"
                      required
                    />
                  </div>
                  {/*Kết Thúc Tên Nhóm Khách hàng*/}
                  <div>
                    <button
                      className="col-md-2 btn btn-primary mb-3"
                      type="button"
                      id="button-addon2"
                    >
                      <i className="fas fa-search"></i>
                      {/* Biểu tượng tìm kiếm Font Awesome */}
                    </button>
                  </div>
                </form>
                {/*font hiển thị popup*/}
                {/* Font hiển thị popup */}
                <Modal show={showModal} onHide={toggleModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Thêm mới nhóm khách hàng</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form>
                      <label htmlFor="maNhom">Mã nhóm khách hàng</label>
                      <input type="text" id="maNhom" className="form-control" />
                      <br />
                      <label htmlFor="tenNhom">Tên nhóm khách hàng</label>
                      <input
                        type="text"
                        id="tenNhom"
                        className="form-control"
                      />
                      <br />
                      <label htmlFor="soTien">Số tiền</label>
                      <input
                        type="number"
                        id="soTien"
                        className="form-control"
                      />
                      <br />
                      <label htmlFor="chietKhau">Chiết khấu</label>
                      <input
                        type="number"
                        id="chietKhau"
                        className="form-control"
                      />
                      <br />
                      <button type="submit" className="btn btn-success">
                        Lưu
                      </button>
                    </form>
                  </Modal.Body>
                </Modal>
                {/* Kết Thúc font hiển thị popup */}
                {/*Kết Thúc font hiển thị popup*/}
                {/*Nút Thêm Mới*/}
                <div>
                  <Button variant="success" onClick={toggleModal}>
                    Thêm Mới
                  </Button>
                </div>
                {/*Kết Thúc nút Thêm Mới*/}
                {/* Kết thúc fomt điền điều kiện lọc */}
                {/* Lưới Dữ Liệu */}
                <div className="card-body">
                  <div className="row">
                    <div className="table-responsive col-md-2 card-body">
                      <table
                        id="example-database"
                        className="table table-striped table-bordered dt-responsive nowrap table table-editable table-nowrap align-middle table-edits"
                        style={{
                          borderCollapse: "collapse",
                          borderSpacing: 0,
                          width: "100%",
                        }}
                      >
                        <thead>
                          <tr>
                            <th>
                              <input type="checkbox" id="checkAll" />
                            </th>
                            <th>STT</th>
                            <th>Mã nhóm khách hàng</th>
                            <th>Tên nhóm khách hàng</th>
                            <th>Số tiền</th>
                            <th>Chiết khấu</th>
                            <th>Ngày Tạo</th>
                            <th>Thao tác</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Dữ liệu từ API sẽ được thêm vào đây */}
                          <tr>
                            <td>
                              <input type="checkbox" className="checkItem" />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <button
                                className="btn btn-secondary btn-sm edit"
                                title="Edit"
                              >
                                <i className="fas fa-pencil-alt"></i>
                              </button>
                              <button
                                className="btn btn-danger btn-sm delete"
                                title="Delete"
                              >
                                <i className="fas fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/* Kết Thúc Lưới Dữ Liệu */}
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
          {/* Hết*/}
        </div>
      </div>
    </div>
  );
};

export default Nhomkhachhang;
