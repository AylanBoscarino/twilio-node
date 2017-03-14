'use strict';

var _ = require('lodash');
var Holodeck = require('../../../../holodeck');
var Request = require('../../../../../../lib/http/request');
var Response = require('../../../../../../lib/http/response');
var RestException = require('../../../../../../lib/base/RestException');
var Twilio = require('../../../../../../lib');


var client;
var holodeck;

describe('Document', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', holodeck);
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .documents('ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/Sync/Services/<%= serviceSid %>/Documents/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'created_by': 'created_by',
          'data': {},
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'revision': 'revision',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'url': 'https://preview.twilio.com/Sync/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Documents/ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'permissions': 'https://preview.twilio.com/Sync/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Documents/ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Permissions'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .documents('ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .documents('ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/Sync/Services/<%= serviceSid %>/Documents/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.preview.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .documents('ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .documents.create();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/Sync/Services/<%= serviceSid %>/Documents')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'created_by': 'created_by',
          'data': {},
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'revision': 'revision',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'url': 'https://preview.twilio.com/Sync/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Documents/ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'permissions': 'https://preview.twilio.com/Sync/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Documents/ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Permissions'
          }
      });

      holodeck.mock(new Response(201, body));

      var promise = client.preview.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .documents.create();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .documents.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/Sync/Services/<%= serviceSid %>/Documents')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'documents': [],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/Sync/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Documents?PageSize=50&Page=0',
              'key': 'documents',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/Sync/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Documents?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .documents.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'documents': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'created_by': 'created_by',
                  'data': {},
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'revision': 'revision',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'url': 'https://preview.twilio.com/Sync/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Documents/ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'links': {
                      'permissions': 'https://preview.twilio.com/Sync/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Documents/ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Permissions'
                  }
              }
          ],
          'meta': {
              'first_page_url': 'https://preview.twilio.com/Sync/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Documents?PageSize=50&Page=0',
              'key': 'documents',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/Sync/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Documents?PageSize=50&Page=0'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .documents.list();
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

      var opts = {
        data: '{}'
      };
      var promise = client.preview.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .documents('ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        sid: 'ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/Sync/Services/<%= serviceSid %>/Documents/<%= sid %>')(solution);

      var values = {
        Data: '{}',
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'created_by': 'created_by',
          'data': {},
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'revision': 'revision',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'url': 'https://preview.twilio.com/Sync/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Documents/ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'permissions': 'https://preview.twilio.com/Sync/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Documents/ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Permissions'
          }
      });

      holodeck.mock(new Response(200, body));

      var opts = {
        data: '{}'
      };
      var promise = client.preview.sync.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                       .documents('ETaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});
