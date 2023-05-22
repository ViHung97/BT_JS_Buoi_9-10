function NhanVien(_TK, _hoTen, _email, _pass, _date, _luongCB, _chucVu, _gioLam) {
    this.taiKhoan = _TK;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _pass;
    this.ngaySinh = _date;
    this.luongCoBan = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";

    this.tinhTongLuong = function () {
        switch (this.chucVu) {
            case "Sếp":
                this.tongLuong = Number(this.luongCoBan) * 3;
                break;
            case "Trưởng phòng":
                this.tongLuong = Number(this.luongCoBan) * 2;
                break;
            case "Nhân viên":
                this.tongLuong = Number(this.luongCoBan);
                break;
        };

    };

    this.tinhXepLoai = function () {
        if (0 < this.gioLam && this.gioLam < 160) {
            this.xepLoai = "Nhân viên trung bình";
        } else if (160 <= this.gioLam && this.gioLam < 176) {
            this.xepLoai = "Nhân viên khá";
        } else if (176 <= this.gioLam && this.gioLam < 192) {
            this.xepLoai = "Nhân viên giỏi"
        } else {
            this.xepLoai = "Nhân viên xuất sắc"
        };

    };
};

