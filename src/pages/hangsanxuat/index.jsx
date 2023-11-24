import React, { useState } from "react";
import "./styles.scss";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ReactPaginate from "react-paginate";

const Hangsanxuat = () => {
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
              <h6 className="page-title">Danh Mục Hãng Sản Xuất</h6>
            </div>

            <div className="card">
              <div className="card-body">
                {/* <!-- Fomt điền điều kiện lọc --> */}
                <form className="row g-3 needs-validation" noValidate>
                  {/* <!--Mã Sản Phẩm--> */}
                  <div className="col-md-2">
                    <label htmlFor="maHangSanXuat" className="form-label">
                      Mã Hãng sản xuất
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="maHangSanXuat"
                      required
                    />
                  </div>
                  {/* <!--Kết Thúc Mã Sản Phẩm--> */}
                  {/* <!--Tên Sản Phẩm--> */}
                  <div className="col-md-2">
                    <label htmlFor="tenHangSanXuat" className="form-label">
                      Tên Hãng sản xuất
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="tenHangSanXuat"
                      required
                    />
                  </div>
                  {/* <!--Kết Thúc Tên Sản Phẩm--> */}

                  <div>
                    <button
                      className="col-md-2 btn btn-primary mb-3"
                      type="button"
                      id="nutTimKiem"
                    >
                      <i className="fas fa-search"></i>
                      {/* <!-- Biểu tượng tìm kiếm Font Awesome --> */}
                    </button>
                  </div>

                  {/* <!--font hiển thị popup--> */}
                  <Modal show={showModal} onHide={toggleModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Thêm Mới Hãng Sản Xuất</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form>
                        Mã Hãng Sản Xuất:{" "}
                        <input
                          type="text"
                          id="maHangSanXuat"
                          className="form-control"
                        />
                        <br />
                        Tên Hãng Sản Xuất:{" "}
                        <input
                          type="text"
                          id="tenHangSanXuat"
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
                        <button type="submit" className="btn btn-success">
                          Lưu
                        </button>
                      </form>
                    </Modal.Body>
                  </Modal>
                  {/* <!--Kết Thúc font hiển thị popup--> */}
                  {/* <!--Nút Thêm Mới--> */}
                  <div>
                    <Button variant="success" onClick={toggleModal}>
                      Thêm Mới
                    </Button>
                  </div>
                </form>
                {/* <!-- Kết thúc fomt điền điều kiện lọc --> */}
                {/* <!-- Lưới Dữ Liệu --> */}

                <div className="card-body">
                  <div className="row">
                    <div className="table-responsive col-md-2 card-body">
                      <table
                        id="duLieuHangSanXuat"
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
                              <input type="checkbox" id="chonTatCa" />
                            </th>
                            <th>STT</th>
                            <th>Mã Đơn Vị Tính</th>
                            <th>Tên Đơn Vị Tính</th>
                            <th>Ngày Tạo</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-id="1">
                            <td>
                              <input type="checkbox" className="row-checkbox" />
                            </td>
                            <td data-field="id" style={{ width: "80px" }}>
                              1
                            </td>
                            <td data-field="name">VD001</td>
                            <td data-field="age">0001</td>
                            <td data-field="age">Theo Lố</td>
                            <td data-field="id">07/09/2023</td>
                            <td>
                              <a
                                className="btn btn-secondary btn-sm edit"
                                title="Edit"
                              >
                                <i className="fas fa-pencil-alt"></i>
                              </a>
                              <a
                                className="btn btn-danger btn-sm delete"
                                title="Delete"
                              >
                                <i className="fas fa-trash"></i>
                              </a>
                            </td>
                          </tr>
                          <tr data-id="1">
                            <td>
                              <input type="checkbox" className="row-checkbox" />
                            </td>
                            <td data-field="id" style={{ width: "80px" }}>
                              1
                            </td>
                            <td data-field="name">VD001</td>
                            <td data-field="age">0001</td>
                            <td data-field="age">Theo Lốc</td>
                            <td data-field="id">07/09/2023</td>
                            <td>
                              <a
                                className="btn btn-secondary btn-sm edit"
                                title="Edit"
                              >
                                <i className="fas fa-pencil-alt"></i>
                              </a>
                              <a
                                className="btn btn-danger btn-sm delete"
                                title="Delete"
                              >
                                <i className="fas fa-trash"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                        {/* <!-- end tbody --> */}
                      </table>
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
                      {/* <!-- Kết Thúc Lưới Dữ Liệu --> */}
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

export default Hangsanxuat;
