'use strict';

var utils = require('../utils/writer.js');
var Client = require('../service/ClientService');

module.exports.food_deliveryDelivery_nameClientsClient_mailDELETE = function food_deliveryDelivery_nameClientsClient_mailDELETE (req, res, next) {
  Client.food_deliveryDelivery_nameClientsClient_mailDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.food_deliveryDelivery_nameClientsClient_mailGET = function food_deliveryDelivery_nameClientsClient_mailGET (req, res, next, email) {
  Client.food_deliveryDelivery_nameClientsClient_mailGET(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.food_deliveryDelivery_nameClientsClient_mailPUT = function food_deliveryDelivery_nameClientsClient_mailPUT (req, res, next, body) {
  Client.food_deliveryDelivery_nameClientsClient_mailPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.food_deliveryNameClientsGET = function food_deliveryNameClientsGET (req, res, next) {
  Client.food_deliveryNameClientsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.food_deliveryNameClientsPOST = function food_deliveryNameClientsPOST (req, res, next, body) {
  Client.food_deliveryNameClientsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
