class Rectangle {
    _chieuDai;
    _chieuRong;
     constructor(chieuDai,chieuRong) {
         this._chieuDai = chieuDai;
         this._chieuRong = chieuRong;
     }

    get chieuDai() {
        return this._chieuDai;
    }

    set chieuDai(value) {
        this._chieuDai = value;
    }

    get chieuRong() {
        return this._chieuRong;
    }

    set chieuRong(value) {
        this._chieuRong = value;
    }
    tinhDienTich() {
         return this._chieuRong*this._chieuDai;
    }
    tinhChuVi() {
         return (this._chieuDai + this._chieuRong) * 2;
    }
    showRectangle() {
         let rec = document.getElementById('myCanvas');
         let ctx = rec.getContext('2d');
         ctx.beginPath();
         ctx.rect(50,50,this._chieuDai,this._chieuRong);
         ctx.strokeStyle = 'red';
         ctx.stroke();
    }
}