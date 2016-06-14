/*!
 * Copyright (c) 2016 Nanchao Inc.
 * All rights reserved.
 */

'use strict';

var KernelModule = require('kernel-module');
var fs = require('fs');

//-----------------------------------------------------------------------------

// var PULSE_BIT = 0x01000000;
var PULSE_MASK = 0x00ffffff;

function integersToSignal(numbers) {
    var buffer = new Buffer(numbers.length * 4);
    for (var i = 0; i < numbers.length; ++i) {
        var data = numbers[i];
        var payload = data & PULSE_MASK;
        buffer.writeUInt32LE(payload, i * 4);
    }
    return buffer;
}

//-----------------------------------------------------------------------------

var MODULE_NAME = 'lirc-send';
var DEVICE_PATH = '/dev/lirc-sender';

function InfraredDevice() {
    var self = {
        _fd: -1
    };

    Object.setPrototypeOf(self, InfraredDevice.prototype);
    return self;
}

InfraredDevice.prototype.open = function (pin) {
    try {
        KernelModule.install(MODULE_NAME, 'gpio_out_pin=' + pin);
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
    }
    if (this._fd < 0) {
        this._fd = fs.openSync(DEVICE_PATH, 'w', parseInt('666', 8));
    }
};

InfraredDevice.prototype.close = function () {
    if (this._fd >= 0) {
        fs.closeSync(this._fd);
        this._fd = -1;
    }
    KernelModule.remove(MODULE_NAME);
};

InfraredDevice.prototype.send = function (data, callback) {
    var buffer = integersToSignal(data);
    fs.write(this._fd, buffer, -1, callback);
};

module.exports = InfraredDevice;
