import React, { useState } from "react";
import "./styles.scss";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ReactPaginate from "react-paginate";

const Nhacungcap = () => {
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  const handleCheckAll = () => {
    const checkboxes = document.querySelectorAll(".row-check");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  };

  const handleCheck = () => {
    const totalRows = document.querySelectorAll(".row-check").length;
    const checkedRows = document.querySelectorAll(".row-check:checked").length;
    document.getElementById("chonTatCa").checked = totalRows === checkedRows;
  };

  const handlePageClick = () => {};

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <h4 className="card-title">Chi Tiết Nhà Cung Cấp</h4>
          {/* <!-- Bắt đầu khung chứa điều kiện lọc --> */}
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2">
                  <label>Mã Nhà Cung Cấp</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập Mã Khách Hàng"
                    id="maNhaCungCap"
                  />
                </div>
                <div className="col-md-2">
                  <label>Tên Nhà Cung Cấp</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập Tên Khách Hàng"
                    id="tenNhaCungCap"
                  />
                </div>
                <div className="col-md-2">
                  <label>Số Điện Thoại Nhà Cung Cấp</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập Số Điện Thoại Khách Hàng"
                    id="soDienThoaiNhaCungCap"
                  />
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
                  <div className="col-md-2 mb-3">
                    <Button variant="success" onClick={toggleModal}>
                      Thêm
                    </Button>
                  </div>

                  {/* <!-- font hiển thị popup --> */}
                  <Modal show={showModal} onHide={toggleModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Thêm Mới Nhà Cung Cấp</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form>
                        Mã Nhà Cung Cấp:{" "}
                        <input
                          type="text"
                          id="maNhaCungCap"
                          className="form-control"
                        />
                        <br />
                        Tên Nhà Cung Cấp:{" "}
                        <input
                          type="text"
                          id="tenNhaCungCap"
                          className="form-control"
                        />
                        <br />
                        Số Điện Thoại Khách Hàng:{" "}
                        <input
                          type="text"
                          id="soDienThoaiNhaCungCap"
                          className="form-control"
                        />
                        <br />
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
                  {/* <!-- Kết Thúc font hiển thị popup --> */}

                  {/* <!-- font hiển thị popup sửa --> */}
                  <Modal show={editModal} onHide={toggleEditModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Sửa Nhà Cung Cấp</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form>
                        Mã Nhà Cung Cấp:{" "}
                        <input
                          type="text"
                          id="maNhaCungCap"
                          className="form-control"
                        />
                        <br />
                        Tên Nhà Cung Cấp:{" "}
                        <input
                          type="text"
                          id="tenNhaCungCap"
                          className="form-control"
                        />
                        <br />
                        Số Điện Thoại Khách Hàng:{" "}
                        <input
                          type="text"
                          id="soDienThoaiNhaCungCap"
                          className="form-control"
                        />
                        <br />
                        Ghi Chú:{" "}
                        <textarea
                          className="form-control"
                          id="ghiChu"
                          name="area"
                        ></textarea>
                        <br />
                        <button type="submit" className="btn btn-success">
                          Cập nhật
                        </button>
                      </form>
                    </Modal.Body>
                  </Modal>
                  {/* <!-- Kết Thúc font hiển thị popup sửa --> */}

                  <table
                    id="datatable-buttons"
                    className="table table-striped table-bordered dt-responsive nowrap"
                    style={{
                      borderCollapse: "collapse",
                      borderSpacing: 0,
                      width: "100%",
                    }}
                  >
                    <thead>
                      <tr>
                        <th>
                          <input
                            type="checkbox"
                            id="chonTatCa"
                            onClick={handleCheckAll}
                          />
                        </th>
                        <th>Mã Nhà Cung Cấp</th>
                        <th>Tên Nhà Cung Cấp</th>
                        <th>Địa Chỉ</th>
                        <th>SĐT</th>

                        <th>Thao Tác</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            className="row-check"
                            id="chonDong1"
                            onClick={handleCheck}
                          />
                        </td>
                        <td>KH_001</td>
                        <td>Phan Văn Bình</td>
                        <td>Đà Nẵng</td>

                        <td>450 VNĐ</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-success btn-sm"
                            onClick={toggleEditModal}
                          >
                            Sửa
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                      {/* <!-- Repeat the above <tr> block for each row of data --> */}
                    </tbody>
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
                </div>
              </div>
            </div>
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
      </div>
    </div>
  );
};

export default Nhacungcap;
