'use strict';

var utils = require('../utils/writer.js');
var Client = require('../service/ClientService');

module.exports.clientGET = function clientGET (req, res, next) {
  Client.clientGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientNameDELETE = function clientNameDELETE (req, res, next) {
  Client.clientNameDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientNameGET = function clientNameGET (req, res, next, email, nom, prenom) {
  Client.clientNameGET(email, nom, prenom)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientNamePUT = function clientNamePUT (req, res, next, body) {
  Client.clientNamePUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.clientPOST = function clientPOST (req, res, next, body) {
  Client.clientPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
