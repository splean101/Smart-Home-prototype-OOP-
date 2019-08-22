export function Device (model){
    this._model = model;
    this._state = 'off';

};

Device.prototype.Model = function (model) {
    if (!model) {
        return this._model;
    } else {
        this._model = model;
    };
};
Device.prototype.getState = function () {
        return this._state;
};

Device.prototype.on = function () {
    return this._state = 'on';
};
Device.prototype.off = function () {
    return this._state = 'off';
};