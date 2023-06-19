'use strict';
const orders = require('../orders.json');
const meals = require("../meals.json");
const clients = require("../clients.json");

/**
 * List all orders
 *
 * no response value expected for this operation
 **/
exports.orderGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete an order
 *
 * no response value expected for this operation
 **/
exports.orderNameDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    const foundItem = orders[id];
    if(foundItem){
      delete orders[id];
      resolve(id + " à bien était supprimer");
    }else{
      resolve("Not found");
    }
  });
}


/**
 * Get one order
 *
 * id String id de la commande
 * no response value expected for this operation
 **/
exports.orderNameGET = function(id) {
  return new Promise(function(resolve, reject) {
    const foundItem = orders[id];
    if (foundItem) {
      resolve(foundItem);
    } else {
      resolve(["pas trouvé"]);
    }
  });
}


/**
 * update an order
 *
 * body Order_name_body 
 * no response value expected for this operation
 **/
exports.orderNamePUT = function(body) {
  return new Promise(function(resolve, reject) {
    const foundItem = orders[body.id]

    if (foundItem) {
      foundItem.id = body.id;
      foundItem.total = body.total;
      foundItem.date = body.date;

      orders[foundItem.id] = foundItem;

      resolve(foundItem);
    } else {
      reject(new Error('Not found.'));
    }
  });
}


/**
 * create a new order
 *
 * body Order_body 
 * no response value expected for this operation
 **/
exports.orderPOST = function(body) {
  return new Promise(function(resolve, reject) {
    const newOrder = {
      id: body.id,
      total: body.total,
      date: body.date,
    };

    orders[newOrder.name] = newOrder;

    resolve(newOrder);
  });
}

