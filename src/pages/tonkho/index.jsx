import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReactPaginate from "react-paginate";

const Tonkho = () => {
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
                <table
                  id="datatable-buttons"
                  className="table table-striped table-bordered dt-responsive nowrap align-middle"
                  style={{
                    borderCollapse: "collapse",
                    borderSpacing: 0,
                    width: "100%",
                  }}
                >
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" id="select-all" />
                      </th>
                      <th>STT</th>
                      <th>Tên Loại SP</th>
                      <th>Phân Loại SP</th>
                      <th>Mã SP</th>
                      <th>Tên SP</th>
                      <th>Số lượng đầu kỳ</th>
                      <th>Số lượng đầu kỳ 2</th>
                      <th>Số lượng nhập trong kỳ</th>
                      <th>Số lượng xuất trong kỳ</th>
                      <th>Số lượng còn lại</th>
                      <th>Giá vốn</th>
                      <th>Thành tiền</th>
                      <th>Giá bán</th>
                      <th>Tổng tiền bán</th>
                      <th>Kho</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Đây là nơi bạn sẽ lặp qua dữ liệu của mình và tạo các hàng */}
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
        </div>
      </div>
    </div>
  );
};

export default Tonkho;
