import React, { useState } from "react";
import "./styles.scss";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ReactPaginate from "react-paginate";

const Chinhanh = () => {
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
              <h6 className="page-title">Danh Mục Chi Nhánh</h6>
            </div>

            <div className="card">
              <div className="card-body">
                {/* <!-- Fomt điền điều kiện lọc --> */}
                <form className="row g-3 needs-validation" noValidate>
                  {/* <!--Mã Sản Phẩm--> */}
                  <div className="col-md-2">
                    <label htmlFor="maChiNhanh" className="form-label">
                      Mã Chi Nhánh
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="maChiNhanh"
                      required
                    />
                  </div>
                  {/* <!--Kết Thúc Mã Sản Phẩm--> */}
                  {/* <!--Tên Sản Phẩm--> */}
                  <div className="col-md-2">
                    <label htmlFor="tenChiNhanh" className="form-label">
                      Tên Chi Nhánh
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="tenChiNhanh"
                      required
                    />
                  </div>
                  {/* <!--Kết Thúc Tên Sản Phẩm--> */}

                  <div>
                    <button
                      className="col-md-2 btn btn-primary mb-3"
                      type="button"
                      id="buttonTimKiem"
                    >
                      <i className="fas fa-search"></i>{" "}
                      {/* Biểu tượng tìm kiếm Font Awesome */}
                    </button>
                  </div>

                  {/* <!--font hiển thị popup--> */}
                  <Modal show={showModal} onHide={toggleModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Thêm Mới Chi Nhánh</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form>
                        Mã Chi Nhánh:{" "}
                        <input
                          type="text"
                          id="maChiNhanh"
                          className="form-control"
                        />
                        <br />
                        Tên Chi Nhánh:{" "}
                        <input
                          type="text"
                          id="tenChiNhanh"
                          className="form-control"
                        />
                        <br />
                        {/*Đơn Giá: <input type="number" id="dongia" className="form-control" /><br />*/}
                        Ngày Tạo:{" "}
                        <input
                          type="date"
                          id="ngayTao"
                          className="form-control"
                        />
                        <br />
                        {/*Ghi Chú: <textarea className="form-control" id="elm1" name="area"></textarea><br />*/}
                        <button type="submit" className="btn btn-success">
                          Lưu
                        </button>
                      </form>
                    </Modal.Body>
                  </Modal>
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
                        id="example-database datatable-buttons"
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
                            <th>Mã Chi Nhánh</th>
                            <th>Tên Chi Nhánh</th>
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
                            <td data-field="age">Nhóm Vàng</td>
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
                            <td data-field="age">Nhóm Vàng</td>
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

export default Chinhanh;
