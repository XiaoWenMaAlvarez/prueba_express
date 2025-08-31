const test = require('node:test')
const assert = require('assert')

test('First test', (t) => {
  assert.equal(1 ,1)
})

test('Second test', (t) => {
  assert.equal(1 + 1, 5)
})

