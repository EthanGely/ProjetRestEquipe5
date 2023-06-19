'use strict';

var utils = require('../utils/writer.js');
var Restaurant = require('../service/RestaurantService');

module.exports.food_deliveryNameRestaurantsGET = function food_deliveryNameRestaurantsGET (req, res, next) {
  Restaurant.food_deliveryNameRestaurantsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.food_deliveryNameRestaurantsNameDELETE = function food_deliveryNameRestaurantsNameDELETE (req, res, next, numero) {
  Restaurant.food_deliveryNameRestaurantsNameDELETE(numero)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.food_deliveryNameRestaurantsNameGET = function food_deliveryNameRestaurantsNameGET (req, res, next, name) {
  Restaurant.food_deliveryNameRestaurantsNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.food_deliveryNameRestaurantsNamePUT = function food_deliveryNameRestaurantsNamePUT (req, res, next, body) {
  Restaurant.food_deliveryNameRestaurantsNamePUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.food_deliveryNameRestaurantsPOST = function food_deliveryNameRestaurantsPOST (req, res, next, body) {
  Restaurant.food_deliveryNameRestaurantsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
