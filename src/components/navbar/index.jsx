/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./styles.scss";
import { menu } from "./data";
import logo from "../../assets/imgs/logo-sm.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Nhacungcap from "../../pages/nhacungcap";
import Chitietkhachhang from "../../pages/chitietkhachhang";
import Tonkho from "../../pages/tonkho";
import Phieunhap from "../../pages/phieunhap";
import Phieunhapchitiet from "../../pages/phieunhapchitiet";
import Phieuxuat from "../../pages/phieuxuat";
import Phieuxuatchitiet from "../../pages/phieuxuatchitiet";
import Khohang from "../../pages/khohang";
import Nhapkhohanghoa from "../../pages/nhapkhohanghoa";
import Xuatkhohanghoa from "../../pages/xuatkhohanghoa";
import Chuyenkho from "../../pages/chuyenkho";
import Donhangonline from "../../pages/donhangonline";
import Quanlyhansudung from "../../pages/quanlyhansudung";
import Kiemphieunhapkho from "../../pages/kiemphieunhapkho";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Loaisanpham from "../../pages/loaisanpham";
import Sanpham from "../../pages/sanpham";
import Phanloaisanpham from "../../pages/phanloaisanpham";
import Hangsanxuat from "../../pages/hangsanxuat";
import Chinhanh from "../../pages/chinhanh";
import Donvitinh from "../../pages/donvitinh";
import Nhomkhachhang from "../../pages/nhomkhachhang";

const Navbar = () => {
  const [menuItem, setMenuItem] = useState(null);
  const [isOpenNavbar, setIsOpenNavbar] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log("menuItem: ", menuItem);
  return (
    <div className="Container">
      <div
        className="Navbar-Container"
        style={{
          width: `${isOpenNavbar ? "185px" : "58px"}`,
          padding: `${!isOpenNavbar && "12px"}`,
          minHeight: "100vh",
        }}
      >
        <img
          src={logo}
          alt=""
          className="Mainicon"
          style={{
            marginLeft: `${isOpenNavbar ? "57px" : "5px"}`,
            width: `${isOpenNavbar ? "45px" : "24px"}`,
            height: `${isOpenNavbar ? "45px" : "24px"}`,
          }}
        />
        <p>{isOpenNavbar && <b>PHỤ</b>}</p>
        <div>
          <a href="#" className="waves-effect">
            <i
              class="bi bi-house"
              style={{
                // marginLeft: "6px",
                marginLeft: `${isOpenNavbar ? "6px" : "-3px"}`,
              }}
            ></i>
            <p className="txtHome">{isOpenNavbar ? "Trang Chủ" : ""}</p>
          </a>
        </div>
        <p>{isOpenNavbar && <b>PHẦN CHÍNH</b>}</p>

        <div className="Main-Nav">
          <ul className="Main-Menu">
            {menu.map((item) => (
              <li
                key={item.id}
                className="Menu"
                onClick={() =>
                  menuItem === item.id
                    ? setMenuItem(null)
                    : setMenuItem(item.id)
                }
                style={{
                  padding: `${
                    isOpenNavbar ? "1rem 0px 1rem 1rem" : "12px 0 12px 8px"
                  }`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    {/* <Link to={`/${item?.path}`} className="nav-link">{item.icon} {isOpenNavbar ? item.name : null}</Link> */}
                    {item.icon} {isOpenNavbar ? item.name : null}
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: 0,
                    }}
                  >
                    {menuItem === item.id ? (
                      !isOpenNavbar ? null : (
                        <i class="bi bi-chevron-up"></i>
                      )
                    ) : !isOpenNavbar ? null : (
                      <i class="bi bi-chevron-down"></i>
                    )}
                  </div>
                </div>
                <ul
                  className={`Sub-Menu ${
                    menuItem === item.id ? "d-block" : "d-none"
                  }`}
                >
                  {item?.subMenu?.map((sub) =>
                    !isOpenNavbar ? null : (
                      <li key={sub.id}>
                        <Link to={sub?.path} className="sub-menu-item">
                          {sub.name}
                        </Link>
                        <ul>
                          {sub?.subMenu?.map((subSub) =>
                            !isOpenNavbar ? null : (
                              <li key={subSub.id}>
                                <Link
                                  to={subSub?.path}
                                  className="sub-sub-menu-item"
                                >
                                  {subSub.name}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </li>
                    )
                  )}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="Content-Navbar"
        style={{
          width: isOpenNavbar ? "calc(100vw - 185px)" : "calc(100vw - 58px)",
        }}
      >
        <div className="Titlebar">
          <i
            className="fa-solid fa-bars fa mt-3"
            onClick={() => setIsOpenNavbar(!isOpenNavbar)}
          ></i>
          <div className="Navbar-Right">
            <div className="Btnsearch">
              <input
                type="text"
                className="Search"
                placeholder="Tìm kiếm ...."
              />
              <i className="fa-solid fa-magnifying-glass icon-search"></i>
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <img src={logo} alt="" className="Usericon" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <i className="bi bi-person-circle "></i> <p>Quản Lý Tài Khoản</p>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <i className="bi bi-gear"></i> <p>Cài Đặt</p>
                </MenuItem>
                <hr />
                <MenuItem onClick={handleClose}>
                  <i className="bi bi-box-arrow-left"></i>
                  <p>Đăng Xuất</p>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "98",
            padding: "22px 0",
          }}
        >
          <Routes>
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/nhacungcap" element={<Nhacungcap />} />
            <Route path="/chitietkhachhang" element={<Chitietkhachhang />} />
            <Route path="/tonkho" element={<Tonkho />} />
            <Route path="/khohang" element={<Khohang />} />
            <Route path="/phieunhap" element={<Phieunhap />} />
            <Route path="/phieunhapchitiet" element={<Phieunhapchitiet />} />
            <Route path="/phieuxuat" element={<Phieuxuat />} />
            <Route path="/phieuxuatchitiet" element={<Phieuxuatchitiet />} />
            <Route path="/loaisanpham" element={<Loaisanpham />} />
            <Route path="/sanpham" element={<Sanpham />} />
            <Route path="/phanloaisanpham" element={<Phanloaisanpham />} />
            <Route path="/hangsanxuat" element={<Hangsanxuat />} />
            <Route path="/chinhanh" element={<Chinhanh />} />
            <Route path="/donvitinh" element={<Donvitinh />} />
            <Route path="/nhomkhachhang" element={<Nhomkhachhang />} />

            <Route path="/nhapkhohanghoa" element={<Nhapkhohanghoa />} />
            <Route path="/xuatkhohanghoa" element={<Xuatkhohanghoa />} />
            <Route path="/chuyenkho" element={<Chuyenkho />} />
            <Route path="/donhangonline" element={<Donhangonline />} />
            <Route path="/quanlyhansudung" element={<Quanlyhansudung />} />
            <Route path="/quanlyhansudung" element={<Quanlyhansudung />} />
            <Route path="/kiemphieunhapkho" element={<Kiemphieunhapkho />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
