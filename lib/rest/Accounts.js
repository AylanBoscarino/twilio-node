'use strict';

var _ = require('lodash');
var Domain = require('../base/Domain');
var V1 = require('./accounts/V1');


/* jshint ignore:start */
/**
 * Initialize accounts domain
 *
 * @constructor Twilio.Accounts
 *
 * @property {Twilio.Accounts.V1} v1 - v1 version
 * @property {Twilio.Accounts.V1.CredentialList} credentials - credentials resource
 *
 * @param {Twilio} twilio - The twilio client
 */
/* jshint ignore:end */
function Accounts(twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://accounts.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Accounts.prototype, Domain.prototype);
Accounts.prototype.constructor = Accounts;

Object.defineProperty(Accounts.prototype,
  'v1', {
  get: function() {
    this._v1 = this._v1 || new V1(this);
    return this._v1;
  },
});

Object.defineProperty(Accounts.prototype,
  'credentials', {
  get: function() {
    return this.v1.credentials;
  },
});

module.exports = Accounts;