import React, { useState } from "react";
import "./styles.scss";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const Phieuxuat = () => {
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
              <h6 className="page-title">Phiếu Xuất</h6>

            </div>

            <div className="card">
              <div className="card-body">

                <form className="row g-3 needs-validation" noValidate>
                  <div className="col-md-3">
                    <label htmlFor="timChiNhanh" className="form-label">Tìm Chi Nhánh</label>
                    <select className="form-select form-select-sm" id="timChiNhanh" required>
                      <option selected disabled value="">Chọn chi Nhánh</option>
                      <option>Chi Nhánh 1</option>
                      <option>Chi Nhánh 2</option>
                      <option>Chi Nhánh 3</option>
                    </select>
                    <div className="invalid-feedback">
                      Vui Lòng Chọn Chi Nhánh...
                    </div>
                  </div>

                  <div className="col-md-2">
                    <label>Từ Ngày</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-md-2">
                    <label>Đến Ngày</label>
                    <input type="date" className="form-control" />
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="timKhoTheoChiNhanh" className="form-label">Tìm Kho Theo Chi Nhánh</label>
                    <select className="form-select form-select-sm" id="timKhoTheoChiNhanh" required>
                      <option selected disabled value="">Chọn Kho</option>
                      <option>Kho 1</option>
                      <option>Kho 2</option>
                      <option>Kho 3</option>
                    </select>
                    <div className="invalid-feedback">
                      Vui Lòng Chọn Kho...
                    </div>
                  </div>

                  <div className="col-md-2">
                    <label htmlFor="maNhaCungCap" className="form-label">Mã Nhà Cung Cấp</label>
                    <input type="text" className="form-control form-control-sm" id="maNhaCungCap"
                      required />

                  </div>


                  <div className="col-md-2">
                    <label htmlFor="tenNhaCungCap" className="form-label">Tên Nhà Cung Cấp</label>
                    <input type="text" className="form-control form-control-sm" id="tenNhaCungCap"
                      required />

                  </div>

                  <div className="col-md-2">
                    <label htmlFor="maHoaDon" className="form-label">Mã Hoá Đơn</label>
                    <input type="text" className="form-control form-control-sm" id="maHoaDon"
                      required />

                  </div>


                  <div className="col-md-2">
                    <label htmlFor="tenHoaDon" className="form-label">Tên Hoá Đơn</label>
                    <input type="text" className="form-control form-control-sm" id="tenHoaDon"
                      required />

                  </div>

                  <div className="col-md-3">
                    <label htmlFor="timLoaiHoaDon" className="form-label">Tìm Loại Hoá Đơn</label>
                    <select className="form-select form-select-sm" id="timLoaiHoaDon" required>
                      <option selected disabled value="">Chọn Loại Hoá Đơn</option>
                      <option>Online</option>
                      <option>Truyền Thống</option>

                    </select>
                    <div className="invalid-feedback">
                      Vui Lòng Chọn Loại Hoá Đơn...
                    </div>
                  </div>

                  <div>
                    <button className="col-md-2 btn btn-primary mb-3" type="button" id="button-addon2">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>

                  <Modal show={showModal} onHide={toggleModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Thêm Mới Phiếu Nhập</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* Form goes here */}
                      <form>
                            <div className="form-group">
                              <label htmlFor="maChiNhanh">Mã Chi Nhánh:</label>
                              <input type="text" id="maChiNhanh" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="tenChiNhanh">Tên Chi Nhánh:</label>
                              <input type="text" id="tenChiNhanh" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="maNhaCungCap">Mã Nhà Cung Cấp:</label>
                              <input type="text" id="maNhaCungCap" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="tenNhaCungCap">Tên Nhà Cung Cấp:</label>
                              <input type="text" id="tenNhaCungCap" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="tenKho">Tên Kho:</label>
                              <input type="text" id="tenKho" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="maKho">Mã Kho:</label>
                              <input type="text" id="maKho" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="tenHopDong">Tên Hợp Đồng:</label>
                              <input type="text" id="tenHopDong" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="maHopDong">Mã Hợp Đồng:</label>
                              <input type="text" id="maHopDong" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="loaiHopDong">Loại Hợp Đồng:</label>
                              <input type="text" id="loaiHopDong" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="tongTienTra">Tổng Tiền Trả:</label>
                              <input type="number" id="tongTienTra" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="soTienDaTra">Số Tiền Đã Trả:</label>
                              <input type="number" id="soTienDaTra" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="ngayNhap">Ngày Xuất:</label>
                              <input type="date" id="ngayNhap" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="ngayTao">Ngày Tạo:</label>
                              <input type="date" id="ngayTao" className="form-control" />
                            </div>
                            <div className="form-group">
                              <label htmlFor="hinhAnhHoaDon">Hình Ảnh Hoá Đơn:</label>
                              <div className="mb-3">
                                <input type="file" id="uploadHinhAnhHoaDon" onChange="previewImage(event, 'previewHinhAnhHoaDon')" multiple="multiple" />
                                <img id="previewHinhAnhHoaDon" src="#" alt="Hình Ảnh Hoá Đơn" onClick="openImageModal('previewHinhAnhHoaDon')" style={{ display: 'none' }} />
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="hinhAnhThanhToan">Hình Ảnh Thanh Toán:</label>
                              <div className="mb-3">
                                <input type="file" id="uploadHinhAnhThanhToan" onChange="previewImage(event, 'previewHinhAnhThanhToan')" multiple="multiple" />
                                <img id="previewHinhAnhThanhToan" src="#" alt="Hình Ảnh Thanh Toán" onClick="openImageModal('previewHinhAnhThanhToan')" style={{ display: 'none' }} />
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="ghiChu">Ghi Chú:</label>
                              <textarea className="form-control" id="ghiChu" name="area"></textarea>
                            </div>
                            <button type="submit" className="btn btn-success">Lưu</button>
                          </form>
                    </Modal.Body>
                  </Modal>

                  <div>
                    <button type="button" className="btn btn-success" onClick={toggleModal}>
                      Thêm Mới
                    </button>
                    <button type="button" className="btn btn-success" onClick={() => window.location.href = '#'}>
                      Phiếu Nhập Chi Tiết
                    </button>
                  </div>
                </form>

                <div className="card-body">
                  <div className="row">

                    <div className="table-responsive col-md-2 card-body">
                      <table id="example-database datatable-buttons"
                        className="table table-striped table-bordered dt-responsive nowrap table table-editable table-nowrap align-middle table-edits"
                        style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
                        <thead>
                          <tr>
                            <th><input type="checkbox" id="select-all" /></th>
                            <th>STT</th>
                            <th>Mã Hoá Đơn</th>
                            <th>Tên Hoá Đơn</th>
                            <th>Ngày Xuất</th>
                            <th>Nhà Cung Cấp</th>
                            <th>SĐT Nhà Cung Cấp</th>
                            <th>Tổng Tiền Trả</th>
                            <th>Đã Trả</th>
                            <th>Loại Hoá Đơn</th>

                            <th>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr data-id="1">
                            <td><input type="checkbox" className="row-checkbox" /></td>
                            <td data-field="id" style={{ width: '80px' }}>1</td>
                            <td data-field="name">VD001</td>
                            <td data-field="age">Nhóm Vàng</td>
                            <td data-field="age">Nhóm Vàng</td>
                            <td data-field="age">Nhóm Vàng</td>
                            <td data-field="age">Nhóm Vàng</td>
                            <td data-field="age">Nhóm Vàng</td>
                            <td data-field="age">Nhóm Vàng</td>
                            <td data-field="age">Nhóm Vàng</td>

                            <td>
                              <a className="btn btn-secondary btn-sm edit" title="Edit">
                                <i className="fas fa-pencil-alt"></i>
                              </a>
                              <a className="btn btn-danger btn-sm delete" title="Delete">
                                <i className="fas fa-trash"></i>
                              </a>
                            </td>
                          </tr>
                          <tr data-id="1">
                            <td><input type="checkbox" className="row-checkbox" /></td>
                            <td data-field="id" style={{ width: '80px' }}>1</td>
                            <td data-field="name">VD001</td>
                            <td data-field="age">Nhóm Vàng</td>
                            <td data-field="age">Nhóm Vàng</td>
                            <td data-field="age">Nhóm Vàng</td>
                            <td data-field="age">Nhóm Vàng</td>
                            <td data-field="age">Nhóm Vàng</td>
                            <td data-field="age">Nhóm Vàng</td>
                            <td data-field="age">Nhóm Vàng</td>

                            <td>
                              <a className="btn btn-secondary btn-sm edit" title="Edit">
                                <i className="fas fa-pencil-alt"></i>
                              </a>
                              <a className="btn btn-danger btn-sm delete" title="Delete">
                                <i className="fas fa-trash"></i>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phieuxuat;
