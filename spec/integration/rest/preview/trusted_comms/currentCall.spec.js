'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('CurrentCall', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.trusted_comms.currentCalls().fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://preview.twilio.com/TrustedComms/CurrentCall';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_found response',
    function(done) {
      var body = JSON.stringify({
          'bg_color': '#fff',
          'caller': 'Owl Bank',
          'created_at': '2019-05-01T20:00:00Z',
          'font_color': '#f22f46',
          'from': '+1500123',
          'logo': 'https://www.twilio.com/marketing/bundles/company/img/logos/red/twilio-logo-red.png',
          'manager': 'Twilio',
          'reason': 'Hello Jhon, your bank appointment has been confirmed.',
          'shield_img': 'https://www.twilio.com/marketing/bundles/company/img/badges/red/twilio-badge-red.png',
          'sid': 'CQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'ringing',
          'to': '+1500456',
          'url': 'https://preview.twilio.com/TrustedComms/CurrentCall',
          'use_case': 'conversational'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.trusted_comms.currentCalls().fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
