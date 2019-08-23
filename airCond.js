import { Device } from './device.js'

export function AirConditioner (model) {
    Device.call(this, model);
    this._power = 0;
};

AirConditioner.prototype = Object.create(Device.prototype);
AirConditioner.prototype.constructor = AirConditioner;