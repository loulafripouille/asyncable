const { middleware, paramMiddleware } = require('./index')

describe('middleware safe wrapper', () => {
  const req = {}
  const res = {}
  const next = jest.fn()
  const handler = jest.fn()

  handler
  .mockReturnValueOnce(Promise.resolve())
  .mockReturnValueOnce(Promise.reject())
  .mockReturnValue(Promise.resolve())

  const safeMiddleware = middleware(handler)

  test('Happy path: should call the given function with the middleware signature', () => {
    expect.assertions(1)
    return safeMiddleware(req, res, next)
      .then(() => {
        expect(handler).toBeCalledWith(req, res, next)
      })
  })

  test('Should catch an error', () => {
    expect.assertions(1)
    return safeMiddleware(req, res, next)
      .then(() => {
        expect(next).toBeCalled()
      })
  })
})

describe('paramMiddleware safe wrapper', () => {
  const req = {}
  const res = {}
  const val = 12
  const next = jest.fn()
  const handler = jest.fn()

  handler
  .mockReturnValueOnce(Promise.resolve())
  .mockReturnValueOnce(Promise.reject())
  .mockReturnValue(Promise.resolve())

  const safeMiddleware = paramMiddleware(handler)

  test('Happy path: should call the given function with the param middleware signature', () => {
    expect.assertions(1)
    return safeMiddleware(req, res, next, val)
      .then(() => {
        expect(handler).toBeCalledWith(req, res, next, val)
      })
  })

  test('Should catch an error', () => {
    expect.assertions(1)
    return safeMiddleware(req, res, next)
      .then(() => {
        expect(next).toBeCalled()
      })
  })
})
