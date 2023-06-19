'use strict';
const restaurants = require('../restaurants.json');
const livreurs = require("../livreurs.json");

/**
 * List all restaurants
 *
 * no response value expected for this operation
 **/
exports.restaurantGET = function() {
  return new Promise(function(resolve, reject) {
    resolve(restaurants);
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
    const foundItem = restaurants[name];
    if(foundItem){
      delete restaurants[name];
      resolve(name + " à bien était supprimer");
    }else{
      resolve("erreur nom de food delivery invalide");
    }
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
    const foundItem = restaurants[body.name];

    if (foundItem) {
      foundItem.name = body.name;
      foundItem.type = body.type;

      restaurants[foundItem.name] = foundItem;

      resolve(foundItem);
    } else {
      reject(new Error('Not found.'));
    }
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
    const newRestaurant = {
      name: body.name,
      type: body.type,
    };

    restaurants[newRestaurant.name] = newRestaurant;

    resolve(newRestaurant);
  });
}

