/*!
 * Copyright (c) 2016 Nanchao Inc.
 * All rights reserved.
 */

'use strict';

var Driver = require('ruff-driver');
var Sender = require('./infrared-sender.js');

module.exports = new Driver({
    attach: function () {
        this._sender = new Sender();
        this._sender.open(12);
    },

    detach: function () {
        this._sender.close();
    },

    exports: {
        send: function (data, callback) {
            this._sender.send(data, callback);
        }
    }
});

