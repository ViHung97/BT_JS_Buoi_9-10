function Validation() {
    this.kiemTraRong = function (value, errorId, mess) {
        if (value === "") {
            getEle(errorId).style.display = "block";
            getEle(errorId).innerHTML = mess;
            return false;
        };
        getEle(errorId).style.display = "none";
        getEle(errorId).innerHTML = "";
        return true;
    };

    this.kiemTraDoDaiKiTu = function (value, errorId, mess, mix, max) {
        if (mix <= value.length && value.length <= max) {
            getEle(errorId).style.display = "none";
            getEle(errorId).innerHTML = "";
            return true;
        };
        getEle(errorId).style.display = "block";
        getEle(errorId).innerHTML = mess;
        return false;
    };

    this.kiemTraChuoiKiTu = function (value, errorId, mess) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if (value.match(letter)) {
            getEle(errorId).style.display = "none";
            getEle(errorId).innerHTML = "";
            return true;
        };
        getEle(errorId).style.display = "block";
        getEle(errorId).innerHTML = mess;
        return false;
    };

    this.kiemTraPattern = function (value, errorId, pattern, mess) {
        if (value.match(pattern)) {
            getEle(errorId).style.display = "none";
            getEle(errorId).innerHTML = "";
            return true;
        };
        getEle(errorId).style.display = "block";
        getEle(errorId).innerHTML = mess;
        return false;
    };

    this.kiemTraChucVu = function (idSelect, errorId, mess) {
        if (getEle(idSelect).selectedIndex !== 0) {
            getEle(errorId).style.display = "none";
            getEle(errorId).innerHTML = "";
            return true;
        };
        getEle(errorId).style.display = "block";
        getEle(errorId).innerHTML = mess;
        return false;
    };

    this.kiemTraTkTonTai = function (value, errorId, mess, array) {
        var exist = false;

        for (var i = 1; i < array.length; i++) {
            var nv = array[i];
            if (nv.taiKhoan === value) {
                exist = true;
                break;
            };
        };

        if (exist) {
            getEle(errorId).style.display = "block";
            getEle(errorId).innerHTML = mess;
            return false;
        };
        getEle(errorId).style.display = "none";
        getEle(errorId).innerHTML = "";
        return true;    
    };
};