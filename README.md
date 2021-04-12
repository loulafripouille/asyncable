# express-asyncable
Wraps async/await Express middlewares. Catches error and passes it to next.  
Avoid wrinting try/catch in your middlewares.

[![Build Status](https://travis-ci.org/laudeon/asyncable.svg?branch=master)](https://travis-ci.org/laudeon/asyncable)
[![npm version](https://badge.fury.io/js/express-asyncable.svg)](https://badge.fury.io/js/express-asyncable)

## Why?
DRY when catching errors from asyn/await Express middlewares. 
  
This module exposes a wrapper for param middleware as well, which is using a different signature `(req, res, next, value)`.

## API

### .middleware(function)

Where `function` returns a promise and accepts `req`, `res`, `next` arguments.

### .paramMiddleware(function)

Where `function` returns a promise and accepts `req`, `res`, `next` and `value` arguments.

## Usage example

```js
import { middleware, paramMiddleware } from "asyncable"
// const { middleware, paramMiddleware } = require('asyncable')
// ...

router.param('userId', paramMiddleware(model.findObject.bind(model)))

router.route('/')
  .get(
    // ACL middleware or whatever before for instance...
    middleware(userController.list.bind(userController))
  )
  .post(
    // ACL middleware or whatever before for instance...
    middleware(userController.add.bind(userController))
  )
```
