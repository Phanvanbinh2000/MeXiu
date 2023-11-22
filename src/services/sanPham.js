import request from "./request";

const SanPhamAPI = {
    findAllSanPham: () => {
        return request.get("ProductsController/FindAll");
    },

    createSanPham: (payload = {}) => {
        return request.post("ProductsController/Create", payload);
    },

    updateSanPham: (id, payload = {}) => {
        return request.put(`ProductsController/Update?id=${id}`, payload);
    },
    deleteSanPham: (id, payload = {}) => {
        return request.delete(`ProductsController/Delete?id=${id}`, payload);
    },
    findByIdSanPham: (id) => {
        return request.get(`ProductsController/FindById?id=${id}`);
    },
};
export default SanPhamAPI;