var expect = require('chai').expect

require('../lib/inflectors')

describe('titleize', function() {
  it('should titleize a string with one word', function() {
    expect("foo".titleize).to.equal("Foo")
  })

  it('should titleize a string with multiple words', function() {
    expect("foo bar".titleize).to.equal("Foo Bar")
  })
})

describe('pluralize', function() {
  it('should pluralize words', function() {
    expect("cat".pluralize).to.equal("cats")
  })

  it('should pluralize data properly', function() {
    expect("data".pluralize).to.equal("datum")
  })
})
