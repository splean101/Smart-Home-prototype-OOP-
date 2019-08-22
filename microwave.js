//'use strict';
import { Device } from './device.js'

export function MicrowaveOven(model) {
    Device.call(this, model);
    this._power = 0;
};

MicrowaveOven.prototype = Object.create(Device.prototype);
MicrowaveOven.prototype.constructor = MicrowaveOven;

MicrowaveOven.prototype.increasePower = function () {
    this._power = ++this._power;
};

MicrowaveOven.prototype.decreasePower = function () {
    this._power = --this._power;
};
