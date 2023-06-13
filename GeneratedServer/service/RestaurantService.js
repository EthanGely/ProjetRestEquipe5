'use strict';
const restaurants = require('../restaurants.json');
const foodPlateforms = require("../foodPlateforms.json");

/**
 * List all restaurants
 *
 * no response value expected for this operation
 **/
exports.restaurantGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a restaurant
 *
 * name String nom du restaurant
 * no response value expected for this operation
 **/
exports.restaurantNameDELETE = function(name) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get one restaurant
 *
 * name String nom du restaurant
 * no response value expected for this operation
 **/
exports.restaurantNameGET = function(name) {
  return new Promise(function(resolve, reject) {
    const foundItem = restaurants[name];
    if (foundItem) {
      resolve(foundItem);
    } else {
      resolve(["pas trouvé"]);
    }
  });
}


/**
 * update a restaurant
 *
 * body Restaurant_name_body 
 * no response value expected for this operation
 **/
exports.restaurantNamePUT = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * create new restaurant
 *
 * body Restaurant_body 
 * no response value expected for this operation
 **/
exports.restaurantPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

