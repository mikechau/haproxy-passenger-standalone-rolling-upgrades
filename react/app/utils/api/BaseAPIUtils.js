'use strict';

import superagent from 'superagent';
import Promise from 'bluebird';

const TIMEOUT = 30000;

var csrfToken = csrfToken || document.getElementsByName('csrf-token')[0].content;

export var getAPI = (endpoint, data = {}) => {
  let url = makeUrl(endpoint);
  let request = superagent.get(url).query(data);
  let promise = makePromise(request);

  return promise;
};

export var postAPI = (endpoint, data) => {
  let url = makeUrl(endpoint);
  let request = superagent.post(url).send(data);
  let promise = makePromise(request);

  return promise;
};

export var patchAPI = (endpoint, data) => {
  let url = makeUrl(endpoint);
  let request = superagent.patch(url).send(data);
  let promise = makePromise(request);

  return promise;
};

export var putAPI = (endpoint, data) => {
  let url = makeUrl(endpoint);
  let request = superagent.put(url).send(data);
  let promise = makePromise(request);

  return promise;
};

export var deleteAPI = (endpoint) => {
  let url = makeUrl(endpoint);
  let request = superagent.del(url);
  let promise = makePromise(request);

  return promise;
};

var makeUrl = (endpoint) => {
  try {
    return `${window.location.origin}/${endpoint}`;
  }
  catch (err) {
    return `http://localhost:${process.env.PORT || 3000}/${endpoint}`;
  }
};

var makePromise = (request) => {
  return new Promise(function(resolve, reject) {
      request
      .set('Accept', 'application/json')
      .set('X-CSRF-Token', csrfToken)
      .type('json')
      .timeout(TIMEOUT)
      .end(function(err, res) {
        if (typeof res != 'undefined' && res.status >= 400) {
          reject({
            status: res.status,
            res: res,
            error: res.error
          });
        } else if (err) {
          reject({
            error: err
          });
        } else {
          resolve(res);
        }
      });
    });
};

function UnauthorizedRequest() {};
UnauthorizedRequest.prototype = Object.create(Error.prototype);