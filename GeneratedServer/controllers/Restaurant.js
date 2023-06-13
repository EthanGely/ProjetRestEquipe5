'use strict';

var utils = require('../utils/writer.js');
var Restaurant = require('../service/RestaurantService');

module.exports.restaurantGET = function restaurantGET (req, res, next) {
  Restaurant.restaurantGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.restaurantNameDELETE = function restaurantNameDELETE (req, res, next, name) {
  Restaurant.restaurantNameDELETE(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.restaurantNameGET = function restaurantNameGET (req, res, next, name) {
  Restaurant.restaurantNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.restaurantNamePUT = function restaurantNamePUT (req, res, next, body) {
  Restaurant.restaurantNamePUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.restaurantPOST = function restaurantPOST (req, res, next, body) {
  Restaurant.restaurantPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
