import request from "./request";

export default {
    findAllHangSanXuat: (payload) => {
        return request.get("ManufacturedGoodsController/FindAll", payload);
    },

    createHangSanXuat: (payload) => {
        return request.post("ManufacturedGoodsController/Create", payload);
    },

    updateHangSanXuat: (id, payload) => {
        return request.put(`ManufacturedGoodsController/Update?id=${id}`, payload);
    },
    deleteHangSanXuat: (id, payload) => {
        return request.delete(`ManufacturedGoodsController/Delete?id=${id}`, payload);
    },
    findByIdHangSanXuat: (id, payload) => {
        return request.get(`ManufacturedGoodsController/FindById?id=${id}`, payload);
    },
};