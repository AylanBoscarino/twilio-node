'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('SubscribeRules', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .subscribeRules.fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        roomSid: 'RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        participantSid: 'PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://video.twilio.com/v1/Rooms/<%= roomSid %>/Participants/<%= participantSid %>/SubscribeRules')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'participant_sid': 'PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': null,
          'date_updated': null,
          'rules': []
      });

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .subscribeRules.fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid update request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .subscribeRules.update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        roomSid: 'RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        participantSid: 'PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://video.twilio.com/v1/Rooms/<%= roomSid %>/Participants/<%= participantSid %>/SubscribeRules')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update_filters response',
    function() {
      var body = JSON.stringify({
          'participant_sid': 'PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': null,
          'date_updated': null,
          'rules': [
              {
                  'type': 'exclude',
                  'all': true
              }
          ]
      });

      holodeck.mock(new Response(202, body));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .subscribeRules.update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});