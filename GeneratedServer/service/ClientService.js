'use strict';
const clients = require('../clients.json');

/**
 * List all clients
 *
 **/
exports.clientGET = function() {
  return new Promise(function(resolve, reject) {
    resolve(clients);
  });
}


/**
 * Delete a client
 *
 * no response value expected for this operation
 **/
exports.clientNameDELETE = function() {
  return new Promise(function(resolve, reject) {
    const foundItem = clients[name];
    if(foundItem){
      delete clients[name];
      resolve(name + " à bien était supprimer");
    }else{
      resolve("not found");
    }
  });
}


/**
 * Get one client
 *
 * email String email du client
 * no response value expected for this operation
 **/
exports.clientNameGET = function(email) {
  return new Promise(function(resolve, reject) {
    const foundItem = clients[name];
    if (foundItem) {
      resolve(foundItem);
    } else {
      resolve("Not found");
    }
  });
}


/**
 * update a client
 *
 * body Client_name_body 
 * no response value expected for this operation
 **/
exports.clientNamePUT = function(body) {
  return new Promise(function(resolve, reject) {
    const foundItem = clients[body.email]

    if (foundItem) {
      foundItem.email = body.email;
      foundItem.telephone = body.telephone;
      foundItem.nom = body.nom;
      foundItem.prenom = body.prenom;

      clients[foundItem.email] = foundItem;

      resolve(foundItem);
    } else {
      reject(new Error('Not found.'));
    }
  });
}


/**
 * create a new client
 *
 * body Client_body 
 * no response value expected for this operation
 **/
exports.clientPOST = function(body) {
  return new Promise(function(resolve, reject) {
    const newClient = {
      email: body.email,
      telephone: body.telephone,
      nom: body.nom,
      prenom: body.prenom,
    };

    clients[newClient.email] = newClient;

    resolve(newClient);
  });
}

