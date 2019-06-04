# express-asyncable
Wrap async/await Express middlewares. Catches error and passes it to next.

[![Build Status](https://travis-ci.org/laudeon/asyncable.svg?branch=master)](https://travis-ci.org/laudeon/asyncable)
[![npm version](https://badge.fury.io/js/express-asyncable.svg)](https://badge.fury.io/js/express-asyncable)

## Why?
DRY when catching errors from asyn/await Express middlewares. 
This module exposes also a wrapper for param middleware which is using a different signature `(req, res, next, value)`.

## API

### .middleware(function)

Where `function` returns a promise and accepts `req`, `res`, `next` arguments.

### .paramMiddleware(function)

Where `function` returns a promise and accepts `req`, `res`, `next` and `value` arguments.

## Usage example

```js
const {middleware, paramMiddleware} = require('asyncable')
// ...

router.param('userId', paramMiddleware(model.findObject))

router.route('/')
  .get(middleware(handlers.list))
  .post(middleware(handlers.add))
```
