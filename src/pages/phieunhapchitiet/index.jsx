import React, { useState } from "react";
import "./styles.scss";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Phieunhapchitiet = () => {
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
                            <h6 className="page-title">Phiếu Nhập Chi Tiết</h6>

                        </div>

                        <div className="card">
                            <div className="card-body">

                                {/* <!-- Fomt điền điều kiện lọc --> */}
                                <form className="row g-3 needs-validation" noValidate>
                                    {/* <!--Sản Phẩm--> */}
                                    <div className="col-md-2">
                                        <label htmlFor="maSanPham" className="form-label">Mã Sản Phẩm</label>
                                        <input type="text" className="form-control form-control-sm" id="maSanPham"
                                               required />

                                    </div>
                                    
                                    
                                    <div className="col-md-2">
                                        <label htmlFor="tenSanPham" className="form-label">Tên Sản Phẩm</label>
                                        <input type="text" className="form-control form-control-sm" id="tenSanPham"
                                               required />

                                    </div>
                                    {/* <!--Loại Sản Phẩm--> */}
                                    <div className="col-md-2">
                                        <label htmlFor="maLoaiSanPham" className="form-label">Mã Loại Sản Phẩm</label>
                                        <input type="text" className="form-control form-control-sm" id="maLoaiSanPham"
                                               required />

                                    </div>
                                    
                                    
                                    <div className="col-md-2">
                                        <label htmlFor="tenLoaiSanPham" className="form-label">Tên Loại Sản Phẩm</label>
                                        <input type="text" className="form-control form-control-sm" id="tenLoaiSanPham"
                                               required />

                                    </div>
                                    {/* <!--Phân Loại Sản Phẩm--> */}
                                    <div className="col-md-2">
                                        <label htmlFor="maPhanLoaiSanPham" className="form-label">Mã Phân Loại Sản Phẩm</label>
                                        <input type="text" className="form-control form-control-sm" id="maPhanLoaiSanPham"
                                               required />

                                    </div>
                                    
                                    
                                    <div className="col-md-2">
                                        <label htmlFor="tenPhanLoaiSanPham" className="form-label">Tên Phân Loại Sản Phẩm</label>
                                        <input type="text" className="form-control form-control-sm" id="tenPhanLoaiSanPham"
                                               required />

                                    </div>
                                    
                                    {/* <!-- Chi Nhánh --> */}
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

                                    {/* <!-- Từ Ngày Đến Ngày --> */}
                                    <div className="col-md-2">
                                        <label>Từ Ngày</label>
                                        <input type="date" className="form-control" />
                                    </div>
                                    <div className="col-md-2">
                                        <label>Đến Ngày</label>
                                        <input type="date" className="form-control" />
                                    </div>

                                    {/* <!-- Kho Hàng --> */}
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

                                    {/* <!--Mã Nhà Cung Cấp--> */}
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
                                    {/* <!--Kết Thúc Nhà Cung Cấp-->
                                    <!--Hoá Đơn--> */}
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
                                    {/* <!--Kết Hoá Đơn--> */}

                                    {/* <!-- Loại Hoá Đơn --> */}
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
                                    {/* <!-- Kết Thúc Loại Hoá Đơn --> */}
                                    

                                        

                                        
                                        {/* <!--Kết Thúc Tên Sản Phẩm--> */}
                                        
                                            
                                            {/* <!--Kết Thúc Tên Sản Phẩm--> */}



                                            <div>
                                                <button className="col-md-2 btn btn-primary mb-3" type="button" id="button-addon2">
                                                    <i className="fas fa-search"></i>
                                                     {/* <!-- Biểu tượng tìm kiếm Font Awesome --> */}
                                                </button>
                                            </div>

                                           
                                            {/* <!--Nút Thêm Mới-->  */}
                                            <div>
                                            <button type="button" className="btn btn-success" onClick={toggleModal}>
                                                    Thêm Mới
                                                </button>
                                                
                                            </div>
                                            <Modal show={showModal} onHide={toggleModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Thêm Mới Phiếu Nhập</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* Form goes here */}
                      <form>
                                                                Mã Sản Phẩm: <input type="text" id="maSanPham" className="form-control" /><br />
                                                                Tên Sản Phẩm: <input type="text" id="tenSanPham" className="form-control" /><br />
                                                                Mã Loại Sản Phẩm: <input type="text" id="maLoaiSanPham" className="form-control" /><br />
                                                                Tên Loại Sản Phẩm: <input type="text" id="tenLoaiSanPham" className="form-control" /><br />
                                                                Mã Phân Loại Sản Phẩm: <input type="text" id="maPhanLoaiSanPham" className="form-control" /><br />
                                                                Tên Phân Loại Sản Phẩm: <input type="text" id="tenPhanLoaiSanPham" className="form-control" /><br />
                                                                Đơn Vị Tính 1: <input type="text" id="donViTinh1" className="form-control" /><br />
                                                                Đơn Vị Tính 2: <input type="text" id="donViTinh2" className="form-control" /><br />
                                                                Đơn Vị Tính 3: <input type="text" id="donViTinh3" className="form-control" /><br />
                                                                Đơn Vị Tính 4: <input type="text" id="donViTinh4" className="form-control" /><br />
                                                                {/*Đơn Giá: <input type="number" id="dongia" className="form-control" /><br />*/}
                                                                Hệ Số 1: <input type="text" id="heSo1" className="form-control" /><br />
                                                                Hệ Số 2: <input type="text" id="heSo2" className="form-control" /><br />
                                                                Hệ Số 3: <input type="text" id="heSo3" className="form-control" /><br />
                                                                Hệ Số 4: <input type="text" id="heSo4" className="form-control" /><br />
                                                                Điểm: <input type="number" id="Diem" className="form-control" /><br />
                                                                Số Ngày Cảnh Báo: <input type="number" id="soNgayCanhBao" className="form-control" /><br />
                                                                
                                                                
                                                                Ngày Tạo: <input type="date" id="ngayTao" className="form-control" /><br />
                                                                Hình Ảnh Sản Phẩm: <div className="mb-5">
                                                                <form action="#" className="dropzone">
                                                                    <div className="fallback">
                                                                        <input name="file" type="file" multiple="multiple" />
                                                                    </div>

                                                                    <div className="dz-message needsclick">
                                                                        

                                                                        
                                                                    </div>
                                                                </form>
                                                                {/* <!-- end form --> */}
                                                            </div>  
                                                                Ghi Chú: <textarea className="form-control" id="ghiChu" name="area"></textarea><br />
                                                                <button type="submit" className="btn btn-success">Lưu</button>

                                                            </form>
                    </Modal.Body>
                  </Modal>
                                        </form>
                                        {/* <!-- Kết thúc fomt điền điều kiện lọc -->
                                        <!-- Lưới Dữ Liệu --> */}



                                        <div className="card-body">
                                            <div className="row">

                                                <div className="table-responsive col-md-2 card-body">
                                                    <table id="example-database datatable-buttons"
                                                           className="table table-striped table-bordered dt-responsive nowrap table table-editable table-nowrap align-middle table-edits"
                                                           style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                                                        <thead>
                                                            <tr>
                                                                <th><input type="checkbox" id="select-all" /></th>
                                                                <th>STT</th>
                                                                <th>Mã Sản Phẩm</th>
                                                                <th>Tên Sản Phẩm</th>
                                                                <th>Mã Phân Loại Sản Phẩm</th>
                                                                <th>Tên Phân Loại Sản Phẩm</th>
                                                                <th>Mã Loại Sản Phẩm</th>
                                                                <th>Tên Loại Sản Phẩm</th>
                                                                <th>Mã Hoá Đơn</th>
                                                                <th>Tên Hoá Đơn</th>
                                                                <th>Ngày Nhập</th>
                                                                <th>Số Lượng</th>
                                                                <th>Điểm</th>
                                                                <th>Giá 1</th>
                                                                <th>Đơn Vị 1</th>
                                                                <th>Giá 2</th>
                                                                <th>Đơn Vị 2</th>
                                                                <th>Giá 3</th>
                                                                <th>Đơn Vị 3</th>
                                                                <th>Giá 4</th>
                                                                <th>Đơn Vị 4</th>
                                                                <th>Số Ngày Cảnh Báo</th>
                                                                <th>Hạn Sử Dụng</th>
                                                                <th>Mã Vạch</th>
                                                                <th>Mã QR</th>
                                                                <th>Ghi Chú</th>
                                                                
                                                                <th>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr data-id="1">
                                                                <td><input type="checkbox" className="row-checkbox" /></td>
                                                                <td data-field="id" style={{width: '80px'}}>1</td>
                                                                <td data-field="name">VD001</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                <td data-field="age">Nhóm Vàng</td>
                                                                

                                                                <td>
                                                                    <a class="btn btn-secondary btn-sm edit" title="Edit">
                                                                        <i class="fas fa-pencil-alt"></i>
                                                                    </a>
                                                                    <a class="btn btn-danger btn-sm delete" title="Delete">
                                                                        <i class="fas fa-trash"></i>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                            
                                                        </tbody>
                                                        {/* <!-- end tbody --> */}
                                                    </table>

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

export default Phieunhapchitiet;