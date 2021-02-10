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

describe('UseCase', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/a2p/UseCases?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'data',
              'url': 'https://messaging.twilio.com/v1/a2p/UseCases?PageSize=50&Page=0'
          },
          'data': [
              {
                  'code': 'HIGHER_EDUCATION',
                  'name': 'Higher Education',
                  'description': 'Higher Education: For campaigns created on behalf of Colleges or Universities'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.messaging.v1.useCases.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/a2p/UseCases?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'data',
              'url': 'https://messaging.twilio.com/v1/a2p/UseCases?PageSize=50&Page=0'
          },
          'data': [
              {
                  'code': 'HIGHER_EDUCATION',
                  'name': 'Higher Education',
                  'description': 'Higher Education: For campaigns created on behalf of Colleges or Universities'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.messaging.v1.useCases.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://messaging.twilio.com/v1/a2p/UseCases',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/a2p/UseCases?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'data',
              'url': 'https://messaging.twilio.com/v1/a2p/UseCases?PageSize=50&Page=0'
          },
          'data': [
              {
                  'code': 'HIGHER_EDUCATION',
                  'name': 'Higher Education',
                  'description': 'Higher Education: For campaigns created on behalf of Colleges or Universities'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.messaging.v1.useCases.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.messaging.v1.useCases.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://messaging.twilio.com/v1/a2p/UseCases';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read response',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://messaging.twilio.com/v1/a2p/UseCases?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'data',
              'url': 'https://messaging.twilio.com/v1/a2p/UseCases?PageSize=50&Page=0'
          },
          'data': [
              {
                  'code': 'HIGHER_EDUCATION',
                  'name': 'Higher Education',
                  'description': 'Higher Education: For campaigns created on behalf of Colleges or Universities'
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.messaging.v1.useCases.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});