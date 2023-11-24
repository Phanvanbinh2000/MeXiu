/* global $, QRCode */
import React, { useState } from "react";
import "./styles.scss";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ReactPaginate from "react-paginate";

//thêm
// import { Form } from 'antd';
// import SanPhamAPI from "../../services/sanPham";

const Sanpham = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const openPage = (pageName) => {
    // Ẩn tất cả các phần tử có class="tabcontent"
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Hiển thị phần tử tương ứng với nút được nhấn
    document.getElementById(pageName).style.display = "block";
  };

  // const [form] = Form.useForm();
  // const handleSubmitCreate = (values) => {
  //   // Lấy dữ liệu từ form
  //   const payload = {
  //     "categorizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "manufacturerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "productCode": "string",
  //     "productName": "string",
  //     "productImage": "string",
  //     "productScore": 0,
  //     "unit1Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "unit2Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "unit3Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "unit4Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "coefficient1": 0,
  //     "coefficient2": 0,
  //     "coefficient3": 0,
  //     "barcode": "string",
  //     "notes": "string"
  //   }
  //   SanPhamAPI.createSanPham(payload)
  //     .then(response => {
  //       console.log("🚀 ~ file: index.jsx:32 ~ SanPhamAPI.createSanPham ~ response:", response)
  //     })
  //     .catch(error => {
  //       console.log("🚀 ~ file: index.jsx:36 ~ handleSubmit ~ error:", error)
  //     });
  // };

  // const handleDelete = (id) => {

  //   SanPhamAPI.deleteSanPham(id)
  //     .then(response => {
  //       console.log("🚀 ~ file: index.jsx:61 ~ handleDelete ~ response:", response)
  //     })
  //     .catch(error => {
  //       console.log("🚀 ~ file: index.jsx:65 ~ handleDelete ~ error:", error)
  //     });
  // };

  // const handleSubmitUpdate = (id, values) => {
  //   // Lấy dữ liệu từ form
  //   const payload = {
  //     "categorizationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "manufacturerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "productCode": "string",
  //     "productName": "string",
  //     "productImage": "string",
  //     "productScore": 0,
  //     "unit1Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "unit2Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "unit3Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "unit4Id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //     "coefficient1": 0,
  //     "coefficient2": 0,
  //     "coefficient3": 0,
  //     "barcode": "string",
  //     "notes": "string"
  //   }
  //   SanPhamAPI.updateSanPham(id, payload)
  //     .then(response => {
  //       console.log("🚀 ~ file: index.jsx:89 ~ handleSubmitUpdate ~ response:", response)
  //     })
  //     .catch(error => {
  //       console.log("🚀 ~ file: index.jsx:93 ~ handleSubmitUpdate ~ error:", error)
  //     });
  // };
  // //sự kiện cho nút kích chọn dòng, chọn tất cả hoặc chọn từng dòng 1
  //   document.addEventListener('DOMContentLoaded', function () {
  //     // Lấy tham chiếu đến các phần tử
  //     const selectAllCheckbox = document.getElementById('select-all1');
  //     const rowCheckboxes = document.querySelectorAll('.row-checkbox1');

  //     // Xử lý sự kiện khi nút tích tất cả được nhấp
  //     selectAllCheckbox.addEventListener('change', function () {
  //         rowCheckboxes.forEach(checkbox => {
  //             checkbox.checked = this.checked;
  //         });
  //     });
  // });

  // //sự kiện cho nút kích chọn dòng, chọn tất cả hoặc chọn từng dòng 2
  //     document.addEventListener('DOMContentLoaded', function () {
  //                 // Lấy tham chiếu đến các phần tử
  //                 const selectAllCheckbox = document.getElementById('select-all2');
  //                 const rowCheckboxes = document.querySelectorAll('.row-checkbox2');

  //                 // Xử lý sự kiện khi nút tích tất cả được nhấp
  //                 selectAllCheckbox.addEventListener('change', function () {
  //                     rowCheckboxes.forEach(checkbox => {
  //                         checkbox.checked = this.checked;
  //                     });
  //                 });
  //             });
  //    //Số thứ tự tăng dần
  //    // Lấy danh sách tất cả các hàng
  //    const rows = document.querySelectorAll("tr[data-id]");

  //    // Lặp qua từng hàng để cập nhật số thứ tự
  //    rows.forEach((row, index) => {
  //        const rowNumberElement = row.querySelector(".row-number");
  //        if (rowNumberElement) {
  //            rowNumberElement.textContent = index + 1;
  //        }
  //    });
  //    //sự kiện chọn field
  //    function openPage(pageName) {
  //     // Ẩn tất cả các phần tử có class="tabcontent"
  //     var i, tabcontent;
  //     tabcontent = document.getElementsByClassName("tabcontent");
  //     for (i = 0; i < tabcontent.length; i++) {
  //       tabcontent[i].style.display = "none";
  //     }

  //     // Hiển thị phần tử tương ứng với nút được nhấn
  //     document.getElementById(pageName).style.display = "block";
  //   }
  //   // Sự kiện click cho nút "In mã QR"
  // $('.qr-code').off('click').on('click', function() {
  //   // Lấy mã sản phẩm từ dòng được chọn
  //   var productCode = $(this).closest('tr').find('td[data-field="name"]').text();

  //   // Xóa mã QR cũ
  //   $("#qrCode").empty();

  //   // Tạo mã QR từ mã sản phẩm
  //   var qrCode = new QRCode(document.getElementById("qrCode"), {
  //     text: productCode,
  //     width: 128,
  //     height: 128
  //   });

  //   // Hiển thị cửa sổ modal
  //   $('#qrModal').modal('show');
  // });
  // //in mã QR
  // $(document).ready(function() {
  //   // Sự kiện click cho nút "In" trong cửa sổ modal mã QR
  //   $('#qrModal .btn-primary').click(function() {
  //     window.print();
  //   });

  //   // Sự kiện click cho nút "In" trong cửa sổ modal mã QR hàng loạt
  //   $('#qrModal2 .btn-primary').click(function() {
  //     window.print();
  //   });
  // });
  const handlePageClick = () => {};

  return (
    <div className="main-content">
      <div className="row align-items-center">
        <div className="page-content">
          <div className="container-fluid">
            <div className="col-md-8">
              <h5 className="page-title">Sản Phẩm</h5>
            </div>
            <div className="card">
              <div className="card-body">
                {/* <!-- Fomt điền điều kiện lọc --> */}
                <div id="filter-form">
                  <form className="row g-3 needs-validation" noValidate>
                    {/* <!--Mã Sản Phẩm--> */}
                    <div className="col-md-2">
                      <label
                        htmlFor="validationCustom03"
                        className="form-label"
                      >
                        Mã Loại Sản Phẩm
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="validationCustom03"
                        required
                      />
                    </div>
                    {/* <!--Kết Thúc Mã Sản Phẩm--> */}
                    {/* <!--Tên Sản Phẩm--> */}
                    <div className="col-md-2">
                      <label
                        htmlFor="validationCustom04"
                        className="form-label"
                      >
                        Tên Loại Sản Phẩm
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="validationCustom04"
                        required
                      />
                    </div>
                    {/* <!--Kết Thúc Tên Sản Phẩm--> */}
                  </form>{" "}
                  {/* Added closing tag */}
                  {/* <!-- Fomt điền điều kiện lọc --> */}
                  <form className="row g-3 needs-validation" noValidate>
                    {/* <!--Mã Sản Phẩm--> */}
                    <div className="col-md-2">
                      <label
                        htmlFor="validationCustom05"
                        className="form-label"
                      >
                        Mã Phân Loại Sản Phẩm
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="validationCustom05"
                        required
                      />
                    </div>
                    {/* <!--Kết Thúc Mã Sản Phẩm--> */}
                    {/* <!--Tên Sản Phẩm--> */}
                    <div className="col-md-2">
                      <label
                        htmlFor="validationCustom06"
                        className="form-label"
                      >
                        Tên Phân Loại Sản Phẩm
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="validationCustom06"
                        required
                      />
                    </div>
                    {/* <!--Kết Thúc Tên Sản Phẩm--> */}
                  </form>{" "}
                  {/* Added closing tag */}
                  {/* <!-- Fomt điền điều kiện lọc --> */}
                  <form className="row g-3 needs-validation" noValidate>
                    {/* <!--Mã Sản Phẩm--> */}
                    <div className="col-md-2">
                      <label
                        htmlFor="validationCustom07"
                        className="form-label"
                      >
                        Mã Sản Phẩm
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="validationCustom07"
                        required
                      />
                    </div>
                    {/* <!--Kết Thúc Mã Sản Phẩm--> */}
                    {/* <!--Tên Sản Phẩm--> */}
                    <div className="col-md-2">
                      <label
                        htmlFor="validationCustom08"
                        className="form-label"
                      >
                        Tên Loại Sản Phẩm
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="validationCustom08"
                        required
                      />
                    </div>
                    {/* <!--Kết Thúc Tên Sản Phẩm--> */}
                    <div>
                      <button
                        className="col-md-2 btn btn-primary mb-3"
                        type="button"
                        id="button-addon2"
                      >
                        <i className="fas fa-search"></i>
                        {/* <!-- Biểu tượng tìm kiếm Font Awesome --> */}
                      </button>
                    </div>
                    {/* <!--font hiển thị popup--> */}
                    <Modal show={showModal} onHide={toggleModal}>
                      <Modal.Header closeButton>
                        <Modal.Title>Thêm Mới Danh Mục Sản Phẩm</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <form>
                          Mã Sản Phẩm:
                          <input
                            type="text"
                            id="maSanPham"
                            className="form-control"
                          />
                          <br />
                          Tên Sản Phẩm:
                          <input
                            type="text"
                            id="tenSanPham1"
                            className="form-control"
                          />
                          <br />
                          Tên Mã Vạch:
                          <input
                            type="text"
                            id="tenSanPham2"
                            className="form-control"
                          />
                          <br />
                          Hệ Số 1:
                          <input
                            type="text"
                            id="tenSanPham3"
                            className="form-control"
                          />
                          <br />
                          Hệ Số 2:
                          <input
                            type="text"
                            id="tenSanPham4"
                            className="form-control"
                          />
                          <br />
                          Hệ Số 3:
                          <input
                            type="text"
                            id="tenSanPham5"
                            className="form-control"
                          />
                          <br />
                          Hệ Số 4:
                          <input
                            type="text"
                            id="tenSanPham6"
                            className="form-control"
                          />
                          <br />
                          {/* <!--Đơn Giá: <input type="number" id="dongia" class="form-control"><br>--> */}
                          Ngày Tạo:
                          <input
                            type="date"
                            id="ngay"
                            className="form-control"
                          />
                          <br />
                          Hình Ảnh:
                          <div className="mb-5">
                            <form action="#" className="dropzone">
                              <div className="fallback">
                                <input
                                  name="file"
                                  type="file"
                                  multiple="multiple"
                                />
                              </div>
                              <div className="dz-message needsclick"></div>
                            </form>
                            {/* <!-- end form --> */}
                          </div>
                          Ghi Chú:
                          <textarea
                            className="form-control"
                            id="elm1"
                            name="area"
                          ></textarea>
                          <br />
                          <button type="submit" className="btn btn-success">
                            Lưu
                          </button>
                        </form>
                      </Modal.Body>
                    </Modal>
                    {/* <!--Kết Thúc font hiển thị popup--> */}
                    {/* <!-- in mã QR --> */}
                    {/* <!-- Modal --> */}
                    <Modal show={showModal} onHide={toggleModal}>
                      <Modal.Header closeButton>
                        <Modal.Title>In mã QR</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="d-flex flex-column align-items-center">
                        {/* <!-- QR Code goes here --> */}
                        <div id="qrCode" className="mb-3"></div>
                        {/* <!-- Product information goes here --> */}
                        <div
                          id="productInfo"
                          className="text-center mb-3"
                        ></div>
                        {/* <!-- Logo goes here --> */}
                        <div id="logo" className="mb-3">
                          <img
                            src="/Src/MeXiu.WebsiteAdmin/MeXiu.WebsiteAdmin/assets/images/favicon.ico"
                            alt="Logo"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </div>
                        {/* <!-- Input for quantity --> */}
                        <div className="mb-3 w-50">
                          <label htmlFor="quantity" className="form-label">
                            Số lượng cần in
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="quantity"
                          />
                        </div>
                      </Modal.Body>
                      <Modal.Footer className="justify-content-center">
                        <Button variant="secondary" onClick={toggleModal}>
                          Đóng
                        </Button>
                        <Button variant="primary">In</Button>
                      </Modal.Footer>
                    </Modal>

                    {/* <!-- Fomt riêng Xuất Mã QR cho từng dòng --> */}
                    {/* <!-- Modal --> */}
                    <Modal show={showModal} onHide={toggleModal}>
                      <Modal.Header closeButton>
                        <Modal.Title>Xuất Mã QR Hàng Loạt</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="d-flex flex-column align-items-center">
                          {/* <!-- QR Code goes here --> */}
                          <div id="qrCode2" className="mb-3"></div>
                          {/* <!-- Product information goes here --> */}
                          <div id="productInfo2" className="text-center"></div>
                          {/* <!-- Input for quantity --> */}
                          <div className="mb-3">
                            <label htmlFor="quantity2" className="form-label">
                              Số lượng cần in
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="quantity2"
                            />
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer className="justify-content-center">
                        <Button variant="secondary" onClick={toggleModal}>
                          Đóng
                        </Button>
                        <Button variant="primary">In</Button>
                      </Modal.Footer>
                    </Modal>
                    {/* <!-- Kết thúc Fomt Sinh Mã QR cho từng dòng --> */}
                    <div>
                      <button
                        type="button"
                        className="btn btn-success mr-2"
                        onClick={toggleModal}
                      >
                        <i className="fas fa-plus-circle"></i> Thêm Mới
                      </button>
                      <button
                        type="button"
                        className="btn btn-success"
                        id="exportQrCode"
                      >
                        <i className="fas fa-qrcode"></i> Xuất Mã QR Hàng Loạt
                      </button>
                    </div>
                  </form>
                </div>
                {/* <!-- Kết thúc fomt điền điều kiện lọc --> */}
                <hr />
                {/* <!-- Lưới Dữ Liệu --> */}
                <div id="data-grid">
                  <div
                    className="btn-group mt-3"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => openPage("BanSanPham")}
                    >
                      {" "}
                      Bảng Số Lượng Sản Phẩm{" "}
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => openPage("BanSanPhamChiTiet")}
                    >
                      Bảng Sản Phẩm Chi Tiết
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div id="BanSanPham" className="tabcontent">
                        <div className="table-responsive">
                          <table
                            id="example-database-datatable-buttons"
                            className="table table-striped table-bordered dt-responsive nowrap table table-editable table-nowrap align-middle table-edits"
                            style={{
                              borderCollapse: "collapse",
                              borderSpacing: "0",
                              width: "100%",
                            }}
                          >
                            <thead>
                              <tr>
                                <th>
                                  <input type="checkbox" id="select-all1" />
                                </th>
                                <th>STT1</th>
                                <th>Mã Sản Phẩm</th>
                                <th>Tên Sản Phẩm</th>
                                {/* <!-- <th>Mã Loại Sản Phẩm</th> --> */}
                                <th>Tên Loại Sản Phẩm</th>
                                {/* <!-- <th>Mã Phân Loại</th> --> */}
                                <th>Tên Phân Loại</th>
                                <th>Số Lượng Hiện Tại</th>
                                <th>Giá Vốn</th>
                                <th>Giá 1</th>
                                <th>Đơn Vị Tính 1</th>
                                <th>Hệ Số 1</th>
                                <th>Giá 2</th>
                                <th>Đơn Vị Tính 2</th>
                                <th>Hệ Số 2</th>
                                <th>Giá 3</th>
                                <th>Đơn Vị Tính3</th>
                                <th>Hệ Số 3</th>
                                <th>Giá 4</th>
                                <th>Đơn Vị Tính 4</th>
                                <th>Hệ Số 4</th>
                                <th>Ghi Chú</th>
                                <th>Ngày Tạo</th>
                                <th>Kho</th>
                                <th>Thao Tác</th>
                              </tr>
                            </thead>
                            <tbody>{/* sau truyển api vào */}</tbody>
                            {/* <!-- end tbody --> */}
                          </table>
                        </div>
                        {/* <!-- Kết Thúc Lưới Dữ Liệu --> */}
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div
                        id="BanSanPhamChiTiet"
                        className="tabcontent"
                        style={{ display: "none" }}
                      >
                        <div className="table-responsive">
                          <table
                            id="example-database-datatable-buttons2"
                            className="table table-striped table-bordered dt-responsive nowrap table table-editable table-nowrap align-middle table-edits"
                            style={{
                              borderCollapse: "collapse",
                              borderSpacing: "0",
                              width: "100%",
                            }}
                          >
                            <thead>
                              <tr>
                                <th>
                                  <input type="checkbox" id="select-all2" />
                                </th>
                                <th>STT2</th>
                                <th>Mã Sản Phẩm</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Mã Loại Sản Phẩm</th>
                                <th>Tên Loại Sản Phẩm</th>
                                <th>Mã Phân Loại</th>
                                <th>Tên Phân Loại</th>
                                <th>Điểm</th>
                                <th>Số Ngày Cảnh Báo</th>
                                <th>Đơn Vị Tính 1</th>
                                <th>Hệ Số 1</th>
                                <th>Đơn Vị Tính 2</th>
                                <th>Hệ Số 2</th>
                                <th>Đơn Vị Tính3</th>
                                <th>Hệ Số 3</th>
                                <th>Đơn Vị Tính 4</th>
                                <th>Hệ Số 4</th>
                                <th>Ghi Chú</th>
                                <th>Ngày Tạo</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>{/* sau sẽ truyền api vào */}</tbody>
                            {/* <!-- end tbody --> */}
                          </table>
                        </div>
                      </div>
                      {/* <!-- Kết Thúc Lưới Dữ Liệu --> */}
                    </div>
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
                className="pagination"
              />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Hết--> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sanpham;
