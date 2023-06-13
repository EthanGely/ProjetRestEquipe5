'use strict';

var utils = require('../utils/writer.js');
var FoodDelivery = require('../service/FoodDeliveryService');

module.exports.food_deliveryGET = function food_deliveryGET (req, res, next) {
  FoodDelivery.food_deliveryGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.food_deliveryNameDELETE = function food_deliveryNameDELETE (req, res, next) {
  FoodDelivery.food_deliveryNameDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.food_deliveryNameGET = function food_deliveryNameGET (req, res, next, name) {
  FoodDelivery.food_deliveryNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.food_deliveryNamePUT = function food_deliveryNamePUT (req, res, next, body) {
  FoodDelivery.food_deliveryNamePUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.food_deliveryPOST = function food_deliveryPOST (req, res, next, body) {
  FoodDelivery.food_deliveryPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
