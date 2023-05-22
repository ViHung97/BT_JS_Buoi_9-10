var dsnv = new DSNV();
var validation = new Validation();

getlocalStorage();

function getEle(id) {
    return document.getElementById(id);
};

function layThongTin() {
    var _TK = getEle("tknv").value;
    var _hoTen = getEle("name").value;
    var _email = getEle("email").value;
    var _pass = getEle("password").value;
    var _date = getEle("datepicker").value;
    var _luongCB = getEle("luongCB").value;
    var _chucVu = getEle("chucvu").value;
    var _gioLam = getEle("gioLam").value;

    /**
     * Validation
     */
    var isValid = true;
    //Tài khoản
    isValid &= 
        validation.kiemTraRong(_TK, "errorTK", "(*)Vui lòng nhập Tài Khoản") &&
        validation.kiemTraDoDaiKiTu(_TK, "errorTK", "(*)Tài khoản chỉ từ 4 đến 8 kí tự", 4, 8) &&
        validation.kiemTraTkTonTai(_TK, "errorTK", "(*)Tài khoản đã tồn tại", dsnv.array);
    //Họ và Tên
    isValid &= 
        validation.kiemTraRong(_hoTen, "errorName", "(*)Vui lòng nhập Họ Tên") &&
        validation.kiemTraChuoiKiTu(_hoTen, "errorName", "(*)Chỉ nhập kí tự");
    //Email
    isValid &= 
        validation.kiemTraRong(_email, "errorEmail", "(*)Vui lòng nhập Email") &&
        validation.kiemTraPattern(_email, "errorEmail", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "(*)Email không hợp lệ");
    //Pass
    isValid &= 
        validation.kiemTraRong(_pass, "errorPass", "(*)Vui lòng nhập Mật Khẩu") &&
        validation.kiemTraPattern(_pass, "errorPass", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/, "(*)Mật khẩu bao gồm chữ hoa, chữ thường, số và kí tự đặc biệt");
    //Date
    isValid &= validation.kiemTraRong(_date, "errorNgayLam", "(*)Vui lòng chọn Ngày Làm");
    //Lương CB
    isValid &= 
        validation.kiemTraRong(_luongCB, "errorLuongCB", "(*)Vui lòng nhập Lương Căn Bản") &&
        validation.kiemTraPattern(_luongCB, "errorLuongCB", /^[0-9]+$/, "(*)Không hợp lệ");
    //Giờ làm
    isValid &= 
        validation.kiemTraRong(_gioLam, "errorGioLam", "(*)Vui lòng nhập Giờ làm") &&
        validation.kiemTraPattern(_gioLam, "errorGioLam", /^[0-9]+$/, "(*)Không hợp lệ");

    //Chức vụ
        validation.kiemTraChucVu("chucvu", "errorChucVu", "(*)Vui lòng chọn Chức Vụ")


    if (!isValid) return null;

    var nv = new NhanVien(_TK, _hoTen, _email, _pass, _date, _luongCB, _chucVu, _gioLam);
    nv.tinhTongLuong();
    nv.tinhXepLoai();
    return nv;
};

function renderTable(data) {
    var content = "";

    for (var i = 0; i < data.length; i++) {
        var nv = data[i];
        content += `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.gioLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.tongLuong}</td>
                <td>${nv.xepLoai}</td>
                <td>
                    <button class = "btn btn-danger" onclick = "deleteNV('${nv.taiKhoan}')"> Delete </button>
                    <button class = "btn btn-success" onclick = ""> Edit </button>
                </td>
            </tr> 
            `;
    };

    getEle("tableDanhSach").innerHTML = content;
};
/**
 * Thêm NV
 */
getEle("btnThem").onclick = function(){
    getEle("btnCapNhat").disabled = true;
};
getEle("btnThemNV").onclick = function () {
    var nv = layThongTin();

    if (nv) {
        dsnv.themNV(nv);
        renderTable(dsnv.array);
        setLocalStorage();
    };

};
/**
 * Xoá NV (nhấn nút delete)
 * đi tìm index để gán vào thuật toán mảng.splice(index, số phần tử cần xoá(1))
 * 
 */
function deleteNV(TK) {
    dsnv.xoaNV(TK);
    renderTable(dsnv.array);
    setLocalStorage();
};
/**
 * Tìm NV theo xếp loại
 */
getEle("searchName").addEventListener("keyup", function () {
    var keywork = getEle("searchName").value;
    var mangTimKiem = dsnv.timNV(keywork);
    renderTable(mangTimKiem);

});


function setLocalStorage() {
    //chuyển data JSON => data String
    var dataString = JSON.stringify(dsnv.array);
    //set local storage
    localStorage.setItem("DSNV", dataString);
};

function getlocalStorage() {
    if (localStorage.getItem("DSNV")) {
        var dataString = localStorage.getItem("DSNV");
        // chuyển data String => data JSON
        var dataJson = JSON.parse(dataString);
        // gán lại vào mảng dsnv.array
        dsnv.array = dataJson;
        // render table
        renderTable(dataJson);
    };
};

