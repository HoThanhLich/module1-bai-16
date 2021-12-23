class Mobile {
    _batttery;
    _draft;
    _inbox;
    _sent;
    _status;

    constructor(batttery,draft, inbox, sent, status) {

        this._batttery = batttery;
        this._draft = draft;
        this._inbox = inbox;
        this._sent = sent;
        this._status = status;
    }
    get batttery() {
        return this._batttery;
    }

    set batttery(value) {
        this._batttery = value;
    }

    get draft() {
        return this._draft;
    }

    set draft(value) {
        this._draft = value;
    }

    get inbox() {
        return this._inbox;
    }

    set inbox(value) {
        this._inbox = value;
    }

    get sent() {
        return this._sent;
    }

    set sent(value) {
        this._sent = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }
    checkStatus() {
        return this._status;
    }
    switch() {
        this._status = !this._status;
    }
    chargeBattery() {
        this._batttery++;
    }
    createMessage(content) {
        this._draft.push(content);
    }
    receiveMessage(content,mobile) {
        this._inbox.push(content);
        mobile.sent.push(content);
    }
    sentMessage(content,mobile) {
        this._sent.push(content);
        mobile.inbox.push(content);
    }
}
let mobile = new Mobile();
if (mobile.checkStatus() === true) {
    alert('dien thoai dang bat')
}