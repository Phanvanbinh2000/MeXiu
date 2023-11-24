export const menu = [
  {
    id: "1",
    name: "Khách Hàng",
    path: "/khachhang",
    icon: <i class="bi bi-person"></i>,
    subMenu: [
      {
        id: "1.1",
        name: "Chi Tiết Khách Hàng",
        path: "/chitietkhachhang",//Minh
      },
      {
        id: "1.2",
        name: "Nhà Cung cấp",
        path: "/nhacungcap",//Minh
      },
      // {
      //   id: "1.3",
      //   name: "Gửi Tin Nhắn Đến KH",
      // },
      // {
      //   id: "1.4",
      //   name: "Nhắc Nhở Sinh Nhật Khách Hàng",
      // },
      // {
      //   id: "1.5",
      //   name: "Tiếp Nhận Xử Lý Yêu Cầu Khách Hàng",
      // },
      // {
      //   id: "1.6",
      //   name: "Phân Nhóm Yêu Cầu Khách Hàng",
      // },
      {
        id: "1.7",
        name: "Nhóm Khách Hàng",
        path: "/nhomkhachhang",//Minh
      },
    ],
  },
  {
    id: "2",
    name: "Hàng Hoá",
    path: "/hanghoa2",
    icon: <i class="bi bi-card-list"></i>,
    subMenu: [
      {
        id: "2.1",
        name: "Sản Phẩm",//Đại
        path: "/sanpham",
      },
      {
        id: "2.2",
        name: "Loại Sản Phẩm",//Đại
        path: "/loaisanpham",
      },
      {
        id: "2.3",
        name: "Phân Loại Sản Phẩm",//Đại
        path: "/phanloaisanpham",
      },
      {
        id: "2.4",
        name: "Hãng Sản Xuất",//Đ.Anh
        path: "/hangsanxuat",
      },
      {
        id: "2.5",
        name: "Chi Nhánh",//Đ.Anh
        path: "/chinhanh",
      },
      {
        id: "2.6",
        name: "Đơn Vị Tính",//Đ.Anh
        path: "/donvitinh",
      },
    ],
  },
  {
    id: "3",
    name: "Kho Hàng",
    path: "/khohang",
    icon: <i class="fa-brands fa-dropbox"></i>,
    subMenu: [
      {
        id: "3.1",
        name: "Tồn Kho",//Bình
        path: "/tonkho",
      },
      {
        id: "3.2",
        name: "Kho Hàng",//Bình
        path: "/khohang",
      },
      {
        id: "3.3",
        name: "Nhập kho hàng hóa",
        subMenu: [
          {
            id: "3.3.1",
            name: "Phiếu Nhập",//Bình
            path: "/phieunhap",
          },
          {
            id: "3.3.2",
            name: "Phiếu Nhập Chi Tiết",//Lâm
            path: "/phieunhapchitiet",
          },
        ],
      },
      {
        id: "3.4",
        name: "Xuất kho hàng hóa",
        subMenu: [
          {
            id: "3.4.1",
            name: "Phiếu Xuất",//Lâm
            path: "/phieuxuat",
          },
          {
            id: "3.4.2",
            name: "Phiếu Xuất Chi Tiết",//Lâm
            path: "/phieuxuatchitiet",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    name: "Hoá Đơn",
    path: "/hoadon",
    icon: <i class="bi bi-receipt-cutoff"></i>,
    subMenu: [
      {
        id: "4.1",
        name: "THoá Đơn Vừa Thanh Toán",
      },
      {
        id: "4.2",
        name: "Thống Kê Hoá Đơn VAT",
      },
      {
        id: "4.3",
        name: "Thống Kê Hoá Đơn Đặt Hàng",
      },
      {
        id: "4.4",
        name: "Kiểm Tra Hoá Đơn Trùng",
      },
      {
        id: "4.5",
        name: "Lịch Sử Đơn Tạm",
      },
    ],
  },
  {
    id: "5",
    name: "Công Nợ",
    path: "/congno",
    icon: <i class="bi bi-clipboard"></i>,
    subMenu: [
      {
        id: "5.1",
        name: "Công Nợ Phải Thu Của Khách Hàng",
      },
      {
        id: "5.2",
        name: "Công Nợ Phải Trả Cho Nhà Cung Cấp",
      },
      {
        id: "5.3",
        name: "Công Nợ Đầu Kỳ",
      },
      {
        id: "5.4",
        name: "Quản Lý Đơn Hàng Nhập Công Nợ",
      },
      {
        id: "5.5",
        name: "Quản Lý Mượn Hàng",
      },
      {
        id: "5.6",
        name: "Ghi Chú",
      },
      {
        id: "5.7",
        name: "Duyệt Phiếu Chi",
      },
    ],
  },
  {
    id: "6",
    name: "Thu Chi",
    path: "/thuchi",
    icon: <i class="fa-regular fa-money-bill"></i>,
    subMenu: [
      {
        id: "6.1",
        name: "Thêm Thu Chi Và Báo Cáo Tổng Kết",
      },
    ],
  },
  {
    id: "7",
    name: "Báo Cáo",
    path: "/baocao",
    icon: <i class="fa-sharp fa-solid fa-chart-simple"></i>,
    subMenu: [
      {
        id: "7.1",
        name: "Báo Cáo Bán Hàng",
      },
      {
        id: "7.2",
        name: "Báo Cáo Điểm",
      },
      {
        id: "7.3",
        name: "Báo Cáo Số Tiền Tặng",
      },
      {
        id: "7.4",
        name: "Báo Cao Theo Nhóm Hàng",
      },
      {
        id: "7.5",
        name: "Lịch Sử Khách Hàng",
      },
      {
        id: "7.6",
        name: "Lịch Sử Sản Phẩm",
      },
      {
        id: "7.7",
        name: "Kiểm Tra Bán Hàng Thực Tế",
      },
      {
        id: "7.8",
        name: "Sổ Quỷ Tiền Mặt",
      },
      {
        id: "7.9",
        name: "Khách Hàng Đạt Top Tháng",
      },
      {
        id: "7.10",
        name: "Khách Hàng Top Năm",
      },
      {
        id: "7.11",
        name: "Báo Cáo Tin Nhắn ZaLo",
      },
      {
        id: "7.12",
        name: "Báo Cáo Mã Dự Thưởng",
      },
    ],
  },
  {
    id: "8",
    name: "Chấm Công",
    path: "/chamcong",
    icon: <i class="fa-solid fa-credit-card"></i>,
    subMenu: [
      {
        id: "8.1",
        name: "Chấm Công Nhân Viên",
      },
    ],
  },
  {
    id: "9",
    name: "QR Code",
    path: "/qrcode",
    icon: <i class="fa-solid fa-qrcode"></i>,
    subMenu: [
      {
        id: "9.1",
        name: "Khai Báo Y Tế",
      },
    ],
  },
  {
    id: "10",
    name: "Cài Đặt",
    path: "/caidat",
    icon: <i class="fa-solid fa-sliders"></i>,
    subMenu: [
      {
        id: "10.1",
        name: "Cài Đặt Hoá Đơn",
      },
      {
        id: "10.2",
        name: "Đổi Mật Khẩu",
      },
      {
        id: "10.3",
        name: "Nhân Viên",
      },
      {
        id: "10.4",
        name: "Phân Quyền",
      },
      {
        id: "10.5",
        name: "Ngày Bán Hàng",
      },
      {
        id: "10.6",
        name: "Cập Nhập Lệnh",
      },
      {
        id: "10.7",
        name: "Cân Tồn Kho",
      },
      {
        id: "10.8",
        name: "Tạo Thêm Kho",
      },
      {
        id: "10.9",
        name: "Reset Phần Mềm",
      },
    ],
  },
];
