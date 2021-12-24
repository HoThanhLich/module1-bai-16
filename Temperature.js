class Temperature {
    _doC;
    doF;
    doK;

    get _doC() {
        return this._doC;
    }

    set _doC(value) {
        this._doC = value;
    }

    constructor(doC) {
        this._doC = doC;
    }

    toFarenheit() {
        return this._doC * 9 / 5 + 32;
    }
    toKenvin() {
        return this._doC + 273.15;
    }
}