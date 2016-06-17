/*!
 * Copyright (c) 2016 Nanchao Inc.
 * All rights reserved.
 */

'use strict';

var Driver = require('ruff-driver');
var Sender = require('./infrared-sender.js');

module.exports = new Driver({
    attach: function (inputs, context, next) {
        this._sender = new Sender();
        this._sender.open(12, next);
    },

    detach: function (callback) {
        this._sender.close(callback);
    },

    exports: {
        send: function (data, callback) {
            this._sender.send(data, callback);
        }
    }
});

