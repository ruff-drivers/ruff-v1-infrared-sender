[![Build Status](https://travis-ci.org/ruff-drivers/ruff-v1-infrared-sender.svg)](https://travis-ci.org/ruff-drivers/ruff-v1-infrared-sender)

# Infrared Transmitter Driver

This module can be used to send infrared signals.

## Supported Engines

* Ruff: >=1.2.0 <1.4.0

## Supported Models

- [irt-01](https://rap.ruff.io/devices/irt-01)

## Installing

Execute following command and enter a **supported model** to install.

```sh
# Please replace `<device-id>` with a proper ID.
# And this will be what you are going to query while `$('#<device-id>')`.
rap device add <device-id>

# Then enter a supported model, for example:
# ? model: irt-01
```

## Usage

Here is the basic usage of this driver. You may use it to send data that is received by `irr-01`.

```js
$('#<device-id>').send(data, function (error) {
    if (error) {
        console.error(error);
        return;
    }

    console.log('data sent');
});
```

## FAQ

If you use this driver under `Ruff: 1.2.0`, you should to press the `HRESET` button to reboot the RuffOS after deploying your application.

## API References

### Methods

#### `send(data, callback)`

Send the data by infrared signal.

- **callback:** the callback.

## Contributing

Contributions to this project are warmly welcome. But before you open a pull request, please make sure your changes are passing code linting and tests.

You will need the latest [Ruff SDK](https://ruff.io/) to install rap dependencies and then to run tests.

### Installing Dependencies

```sh
npm install
rap install
```

### Running Tests

```sh
npm test
```

## License

The MIT License (MIT)

Copyright (c) 2016 Nanchao Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
