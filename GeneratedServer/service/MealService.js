'use strict';
const meals = require('../meals.json');

/**
 * List all meals
 **/
exports.mealGET = function() {
  return new Promise(function(resolve, reject) {
    resolve(meals);
  });
}


/**
 * Delete a meal
 *
 * no response value expected for this operation
 **/
exports.mealNameDELETE = function(name) {
  return new Promise(function(resolve, reject) {
    const foundItem = meals[name];
    if(foundItem){
      delete meals[name];
      resolve(name + " à bien était supprimer");
    }else{
      resolve("Not found");
    }
  });
}


/**
 * Get one meal
 *
 * name String page of results to return
 * no response value expected for this operation
 **/
exports.mealNameGET = function(name) {
  return new Promise(function(resolve, reject) {
    const foundItem = meals[name];
    if (foundItem) {
      resolve(foundItem);
    } else {
      resolve(["pas trouvé"]);
    }
  });
}


/**
 * update a meal
 *
 * body Meal_name_body 
 * no response value expected for this operation
 **/
exports.mealNamePUT = function(body) {
  return new Promise(function(resolve, reject) {
    const foundItem = meals[body.name];

    if (foundItem) {
      foundItem.name = body.name;
      foundItem.description = body.description;
      foundItem.prix = body.prix;

      meals[foundItem.name] = foundItem;

      resolve(foundItem);
    } else {
      reject(new Error('Not found.'));
    }
  });
}


/**
 * create a new meal
 *
 * body Meal_body 
 * no response value expected for this operation
 **/
exports.mealPOST = function(body) {
  return new Promise(function(resolve, reject) {
    const newMeal = {
      name: body.name,
      description: body.description,
      prix: body.prix
    };

    meals[newMeal.name] = newMeal;

    resolve(newMeal);
  });
}

