'use strict';
const clients = require('../clients.json');
const foodPlateforms = require('../foodPlateforms.json');

/**
 * Delete a client
 *
 **/
exports.food_deliveryDelivery_nameClientsClient_mailDELETE = function(delivery_name, client_mail) {
  return new Promise(function(resolve, reject) {
    const platform = foodPlateforms[delivery_name];
    if (platform) {
      const clientByMail = clients[client_mail];
      if (clientByMail) {
        delete clients[client_mail];
        resolve("User " + client_mail + " has been deleted");
      } else {
        reject("client not found");
      }
    } else {
      reject("delivery platform not found");
    }
  });
}


/**
 * Get one client
 *
 * email String email du client
 * no response value expected for this operation
 **/
exports.food_deliveryDelivery_nameClientsClient_mailGET = function( delivery_name, client_mail) {
  return new Promise(function(resolve, reject) {
    const platform = foodPlateforms[delivery_name];
    if (platform) {
      const clientByMail = clients[client_mail];
      if (clientByMail) {
        resolve(clientByMail);
      } else {
        reject("client not found");
      }
    } else {
      reject("delivery platform not found");
    }
  });
}


/**
 * update a client
 *
 * body Clients_client_mail_body 
 * no response value expected for this operation
 **/
exports.food_deliveryDelivery_nameClientsClient_mailPUT = function(body) {
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
 * List all clients
 *
 * no response value expected for this operation
 **/
exports.food_deliveryNameClientsGET = function(name) {
  return new Promise(function(resolve, reject) {
    console.log(name)
    const platform = foodPlateforms[name];
    if (platform) {
      const clients = platform.clients;
      if (clients) {
        resolve(clients);
      } else {
        reject("No clients in " + name);
      }
    } else {
      reject("delivery platform not found");
    }
  });
}


/**
 * create a new client
 *
 * body Name_clients_body 
 * no response value expected for this operation
 **/
exports.food_deliveryNameClientsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

