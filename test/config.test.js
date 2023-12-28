const { assert, expect, should } = require('chai');
const { describe } = require('mocha')

const libby_conf = require('../src/config.js')

describe('#config()', function() {

  beforeEach(function() {});

  context('default', function(){

    it('can find credentials', function() {
      credentials = libby_conf.setup();
      expect(credentials.SLACK_SIGNING_SECRET).to.equals("e7a89ae7eab98789790c1221b2c220d9");
      expect(credentials.SLACK_BOT_TOKEN).to.equals("dndd-654378653478-8459489589454-AER35gfgdfese45465GFG788");
    });

  });

});