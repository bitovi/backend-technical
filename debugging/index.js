const assert = require('assert')
const _ = require('lodash')

const result = _.isEqual([1,2,3], [1,3,2])
assert.equal(result, true, 'They should equal')

console.log(`
  Debugging Challenge Complete!
`)