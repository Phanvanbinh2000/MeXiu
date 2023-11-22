import React, { useState } from "react";
import "./styles.scss";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const Phanloaisanpham = () => {
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
                            <h6 className="page-title">Danh Mục Phân Loại Sản Phẩm</h6>

                        </div>

                        <div className="card">
                            <div className="card-body">

                                {/* <!-- Fomt điền điều kiện lọc --> */}
                                <form className="row g-3 needs-validation" noValidate>

                                    {/* <!--Mã Sản Phẩm--> */}
                                    <div className="col-md-2">
                                        <label htmlFor="maSanPham" className="form-label">Mã Sản Phẩm</label>
                                        <input type="text" className="form-control form-control-sm" id="maSanPham"
                                               required />

                                    </div>
                                    {/* <!--Kết Thúc Mã Sản Phẩm--> */}
                                    {/* <!--Tên Sản Phẩm--> */}
                                    <div className="col-md-2">
                                        <label htmlFor="tenSanPham" className="form-label">Tên Sản Phẩm</label>
                                        <input type="text" className="form-control form-control-sm" id="tenSanPham"
                                               required />

                                    </div>
                                    {/* <!--Kết Thúc Tên Sản Phẩm--> */}
                                    {/* <!--Loại Sản Phẩm--> */}
                                    <div className="col-md-2">
                                        <label htmlFor="loaiSanPham" className="form-label">Loại Sản Phẩm</label>
                                        <input type="text" className="form-control form-control-sm" id="loaiSanPham"
                                               required />

                                    </div>
                                    {/* <!--Kết Thúc Loại Sản Phẩm--> */}
                                    {/* <!--Mã Phân Loại--> */}
                                    <div className="col-md-2">
                                        <label htmlFor="maPhanLoai" className="form-label">Mã Phân Loại</label>
                                        <input type="text" className="form-control form-control-sm" id="maPhanLoai"
                                               required />

                                    </div>
                                    {/* <!--Kết Mã Phân Loại--> */}
                                    {/* <!--Tên Phân Loại--> */}
                                    <div className="col-md-2">
                                        <label htmlFor="tenPhanLoai" className="form-label">Tên Phân Loại</label>
                                        <input type="text" className="form-control form-control-sm" id="tenPhanLoai"
                                               required />

                                    </div>
                                    {/* <!--Kết Thúc Tên Phân Loại--> */}


                                    <div>
                                        <button className="col-md-2 btn btn-primary mb-3" type="button" id="button-addon2">
                                            <i className="fas fa-search"></i> {/* <!-- Biểu tượng tìm kiếm Font Awesome --> */}
                                        </button>
                                    </div>

                                    
                                    <Modal show={showModal} onHide={toggleModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Thêm Mới phân Loại Sản Phẩm</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* Form goes here */}
                                                    <form>
                                                        Mã phân loại sản phẩm: <input type="text" id="maPhanLoaiSanPham" className="form-control" /><br />
                                                        Tên phân loại sản phẩm: <input type="text" id="tenPhanLoaiSanPham" className="form-control" /><br />
                                                        ID loại sản phẩm: <input type="text" id="idLoaiSanPham" className="form-control" /><br />
                                                        Ngày Tạo: <input type="date" id="ngayTao" className="form-control" /><br />
                                                        <button type="submit" className="btn btn-success">Lưu</button>
                                                    </form>
                    </Modal.Body>
                  </Modal>
                                    {/* <!--Nút Thêm Mới--> */}
                                    <div>
                                    <button type="button" className="btn btn-success" onClick={toggleModal}>
                                            Thêm Mới
                                        </button>
                                    </div>
                                </form>
                                {/* <!-- Kết thúc fomt điền điều kiện lọc --> */}
                                {/* <!-- Lưới Dữ Liệu --> */}



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
                                                        <th>Mã Loại SP</th>
                                                        <th>Tên Loại SP</th>
                                                        <th>Tên Phân Loại</th>
                                                        <th>Ngày Tạo</th>
                                                        <th>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr data-id="1">
                                                        <td><input type="checkbox" className="row-checkbox" /></td>
                                                        <td data-field="id" style={{width: '80px'}}>1</td>
                                                        <td data-field="name">VD001</td>
                                                        <td data-field="age">Sữa Vinamiu</td>
                                                        <td data-field="age">Sữa Vinamiu</td>
                                                        <td data-field="id">07/09/2023</td>
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
                                                        <td data-field="id" style={{width: '80px'}}>1</td>
                                                        <td data-field="name">VD001</td>
                                                        <td data-field="age">Sữa Vinamiu</td>
                                                        <td data-field="age">Sữa Vinamiu</td>
                                                        <td data-field="id">07/09/2023</td>
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
                                                {/* <!-- end tbody --> */}
                                            </table>

                                            {/* <!-- Kết Thúc Lưới Dữ Liệu --> */}
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

export default Phanloaisanpham;
