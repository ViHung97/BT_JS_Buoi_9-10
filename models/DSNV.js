function DSNV() {
    this.array = [];

    this.themNV = function (nv) {
        this.array.push(nv)
    };

    this.findIndex = function (TK) {
        var index = -1;
        for (var i = 0; i < this.array.length; i++) {
            var nv = this.array[i];
            if (nv.taiKhoan === TK) {
                index = i;
                break;
            };
        };
        return index;
    };
    this.capNhatNV = function () { };
    this.xoaNV = function (TK) {
        var index = this.findIndex(TK);
        if (index !== -1) {
            this.array.splice(index, 1);
        };
    };
    this.suaNV = function () { };

    this.timNV = function (keywork) {
        var mangTimKiem = [];
        for (i = 0; i < this.array.length; i++) {
            var nv = this.array[i];
            //chuyển keyword về viết thường
            var keyworkToLowerCase = keywork.toLowerCase();
            //chuyển nv.xepLoai về viết thường
            var xepLoaiToLowerCase = nv.xepLoai.toLowerCase();

            if (xepLoaiToLowerCase.indexOf(keyworkToLowerCase) !== -1) {
                mangTimKiem.push(nv);
            }
        };
        return mangTimKiem;
    };

};