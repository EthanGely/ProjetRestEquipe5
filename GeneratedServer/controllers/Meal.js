'use strict';

var utils = require('../utils/writer.js');
var Meal = require('../service/MealService');

module.exports.mealGET = function mealGET (req, res, next) {
  Meal.mealGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.mealNameDELETE = function mealNameDELETE (req, res, next) {
  Meal.mealNameDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.mealNameGET = function mealNameGET (req, res, next, name) {
  Meal.mealNameGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.mealNamePUT = function mealNamePUT (req, res, next, body) {
  Meal.mealNamePUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.mealPOST = function mealPOST (req, res, next, body) {
  Meal.mealPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
