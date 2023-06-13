'use strict';


/**
 * List all clients
 *
 * no response value expected for this operation
 **/
exports.clientGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a client
 *
 * no response value expected for this operation
 **/
exports.clientNameDELETE = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get one client
 *
 * email String  (optional)
 * nom String  (optional)
 * prenom String page of results to return (optional)
 * no response value expected for this operation
 **/
exports.clientNameGET = function(email,nom,prenom) {
  return new Promise(function(resolve, reject) {
    resolve();
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
    resolve();
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
    resolve();
  });
}

