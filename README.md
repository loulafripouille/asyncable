# asyncable
Wrap async/await middleware function for Express. Catches error and passes it to next.

[![Build Status](https://travis-ci.org/laudeon/asyncable.svg?branch=master)](https://travis-ci.org/laudeon/asyncable)

## Why?
Because I need a wrapper for catching errors from an Express middleware using async/await function. I also need to wrap Express param middleware which is using a different signature (req, res, next, value).

## API

### .middleware(function)

Where function returns a promise and accepts `req`, `res`, `next` arguments.

### .paramMiddleware(function)

Where function returns a promise and accepts `req`, `res`, `next` and `value` arguments.

## Usage example

```js
const {middleware, paramMiddleware} = require('asyncable')
// ...

router.param('userId', paramMiddleware(model.findObject))

router.route('/')
  .get(middleware(handlers.list))
  .post(middleware(handlers.add))
```
