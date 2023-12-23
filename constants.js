const { spec } = require("pactum")
const chai = require("chai"),
  assert = chai.assert,
  expect = chai.expect,
  should = chai.should()
require('dotenv').config()

const specPactumJs = spec

module.exports = {
  specPactumJs,
  assert,
  expect,
  should
}