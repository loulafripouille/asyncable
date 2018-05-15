# asyncable
Wrap async/await middleware function for Express. Catches error and passes it to next.

[![Build Status](https://travis-ci.org/laudeon/asyncable.svg?branch=master)](https://travis-ci.org/laudeon/asyncable)
[![npm version](https://badge.fury.io/js/express-asyncable.svg)](https://badge.fury.io/js/express-asyncable)

## Why?
Because I needed to wrap Express middlewares using async functions in order to catch errors and pass them to `next()`. I also needed to wrap Express param middlewares which are using a different signature (req, res, next, value).

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
