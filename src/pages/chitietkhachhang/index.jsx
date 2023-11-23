import React, { useState } from "react";
import "./styles.scss";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const Chitietkhachhang = () => {
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };
  
  const handleCheckAll = () => {
    const checkboxes = document.querySelectorAll('.row-check');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  };

  const handleCheck = () => {
    const totalRows = document.querySelectorAll('.row-check').length;
    const checkedRows = document.querySelectorAll('.row-check:checked').length;
    document.getElementById('checkAll').checked = totalRows === checkedRows;
  };

  const handleCheckBirthdays = () => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    let hasBirthday = false;
    let birthdayName = '';
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach((row) => {
      const dob = row.querySelector('td:nth-child(6)').textContent;
      const dobMonth = new Date(dob).getMonth() + 1;
      if (dobMonth === currentMonth) {
        hasBirthday = true;
        birthdayName = row.querySelector('td:nth-child(3)').textContent;
        return false; // break the loop
      }
    });
    if (hasBirthday) {
      alert(`Tháng này có sinh nhật của Khách Hàng ${birthdayName}!`);
    } else {
      alert("Không có sinh nhật của Khách Hàng trong tháng này.");
    }
  };
  
  return (
    <div className="main-content">

      <div className="page-content">
        <div className="container-fluid">
          <h4 className="card-title">Chi Tiết Khách Hàng</h4>
          {/* <!-- Bắt đầu khung chứa điều kiện lọc --> */}
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2">
                  <label>Mã Khách Hàng</label>
                  <input type="text" className="form-control" placeholder="Nhập Mã Khách Hàng" id="maKhachHang" />
                </div>
                <div className="col-md-2">
                  <label>Tên Khách Hàng</label>
                  <input type="text" className="form-control" placeholder="Nhập Tên Khách Hàng" id="tenKhachHang" />
                </div>
                <div className="col-md-2">
                  <label>Mã Nhóm Khách Hàng</label>
                  <input type="text" className="form-control" placeholder="Nhập Mã Nhóm Khách Hàng" id="maNhomKhachHang" />
                </div>
                <div className="col-md-2">
                  <label>Tên Nhóm Khách Hàng</label>
                  <input type="text" className="form-control" placeholder="Nhập Tên Nhóm Khách Hàng" id="tenNhomKhachHang" />
                </div>
                <div className="col-md-2">
                  <label>Số Điện Thoại Khách Hàng</label>
                  <input type="text" className="form-control" placeholder="Nhập Số Điện Thoại Khách Hàng" id="soDienThoaiKhachHang" />
                </div>
                <div className="col-md-2">
                  <label>Ngày Sinh Từ</label>
                  <input type="date" className="form-control" id="ngaySinhTu" />
                </div>
                <div className="col-md-2">
                  <label>Ngày Sinh Đến</label>
                  <input type="date" className="form-control" id="ngaySinhDen" />
                </div>
                <div className="col-md-2">
                  <button type="submit" className="btn btn-primary mt-4">Tìm Kiếm</button>
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
                  <div className="col-md-2 mb-3">
                    <button id="checkBirthdays" type="button" className="btn btn-primary" onClick={handleCheckBirthdays}>Kiểm tra
                      sinh nhật</button>
                  </div>

                  {/* <!-- font hiển thị popup --> */}
                  <Modal show={showModal} onHide={toggleModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Thêm Mới Khách Hàng</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form>
                        Mã Khách Hàng: <input type="text" id="maKhachHang" className="form-control" /><br />
                        Tên Khách Hàng: <input type="text" id="tenKhachHang" className="form-control" /><br />
                        Mã Nhóm Khách Hàng: <input type="text" id="maNhomKhachHang" className="form-control" /><br />
                        Tên Nhóm Khách Hàng: <input type="text" id="tenNhomKhachHang" className="form-control" /><br />
                        Số Điện Thoại Khách Hàng: <input type="text" id="soDienThoaiKhachHang" className="form-control" /><br />
                        Ngày Sinh Từ: <input type="date" id="ngaySinhTu" className="form-control" /><br />
                        Ngày Sinh Đến: <input type="date" id="ngaySinhDen" className="form-control" /><br />
                        <button type="submit" className="btn btn-success">Lưu</button>
                      </form>
                    </Modal.Body>
                  </Modal>
                  {/* <!-- Kết Thúc font hiển thị popup --> */}

                  {/* <!-- font hiển thị popup sửa --> */}
                  <Modal show={editModal} onHide={toggleEditModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Sửa Chi Tiết Khách Hàng</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form>
                        Mã Khách Hàng: <input type="text" id="maKhachHang" className="form-control" /><br />
                        Tên Khách Hàng: <input type="text" id="tenKhachHang" className="form-control" /><br />
                        Mã Nhóm Khách Hàng: <input type="text" id="maNhomKhachHang" className="form-control" /><br />
                        Tên Nhóm Khách Hàng: <input type="text" id="tenNhomKhachHang" className="form-control" /><br />
                        Số Điện Thoại Khách Hàng: <input type="text" id="soDienThoaiKhachHang" className="form-control" /><br />
                        Ngày Sinh Từ: <input type="date" id="ngaySinhTu" className="form-control" /><br />
                        Ngày Sinh Đến: <input type="date" id="ngaySinhDen" className="form-control" /><br />
                        <button type="submit" className="btn btn-success">Lưu</button>
                      </form>
                    </Modal.Body>
                  </Modal>
                  {/* <!-- Kết Thúc font hiển thị popup sửa --> */}

                  <table id="datatable-buttons"
                    className="table table-striped table-bordered dt-responsive nowrap"
                    style={{borderCollapse: 'collapse', borderSpacing: 0, width: '100%'}}>
                    <thead>
                      <tr>
                        <th><input type="checkbox" id="checkAll" onClick={handleCheckAll} /></th>
                        <th>Mã KH</th>
                        <th>Tên KH</th>
                        <th>Địa Chỉ</th>
                        <th>SĐT</th>
                        <th>Năm Sinh</th>
                        <th>Ngày Mua</th>
                        <th>Thao Tác</th>
                      </tr>
                    </thead>


                    <tbody>
                      <tr>
                        <td><input type="checkbox" className="row-check" id="rowCheck1" onClick={handleCheck} /></td>
                        <td>KH_001</td>
                        <td>Phan Văn Bình</td>
                        <td>Đà Nẵng</td>
                        <td>0123456789</td>
                        <td>2011/11/25</td>
                        <td>450 VNĐ</td>
                        <td>
                          <button type="button" className="btn btn-success btn-sm" onClick={toggleEditModal}>Sửa</button>
                          <button type="button" className="btn btn-danger btn-sm">Xóa</button>
                        </td>
                      </tr>
                      {/* <!-- Repeat the above <tr> block for each row of data --> */}
                    </tbody>
                  </table>

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

export default Chitietkhachhang;