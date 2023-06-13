'use strict';

var utils = require('../utils/writer.js');
var Order = require('../service/OrderService');

module.exports.orderGET = function orderGET (req, res, next) {
  Order.orderGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orderNameDELETE = function orderNameDELETE (req, res, next) {
  Order.orderNameDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orderNameGET = function orderNameGET (req, res, next, id) {
  Order.orderNameGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orderNamePUT = function orderNamePUT (req, res, next, body) {
  Order.orderNamePUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orderPOST = function orderPOST (req, res, next, body) {
  Order.orderPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
