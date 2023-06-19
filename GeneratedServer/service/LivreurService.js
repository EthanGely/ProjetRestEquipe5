'use strict';
const livreurs = require('../livreurs.json');
const foodPlateforms = require("../foodPlateforms.json");
const clients = require("../clients.json");

/**
 * List all delivery men
 *
 * no response value expected for this operation
 **/
exports.livreurGET = function() {
  return new Promise(function(resolve, reject) {
    resolve(livreurs);
  });
}


/**
 * Delete a delivery man
 *
 * no response value expected for this operation
 **/
exports.livreurNameDELETE = function(email) {
  return new Promise(function(resolve, reject) {
    const foundItem = livreurs[email];
    if(foundItem){
      delete livreurs[email];
      resolve(email + " à bien était supprimer");
    }else{
      resolve("Not found");
    }
  });
}


/**
 * Get one delivery man
 *
 * email String email du livreur
 * no response value expected for this operation
 **/
exports.livreurNameGET = function(email) {
  return new Promise(function(resolve, reject) {
    const foundItem = livreurs[email];
    if (foundItem) {
      resolve(foundItem);
    } else {
      resolve(["pas trouvé"]);
    }
  });
}


/**
 * update a delivery man
 *
 * body Livreur_name_body 
 * no response value expected for this operation
 **/
exports.livreurNamePUT = function(body) {
  return new Promise(function(resolve, reject) {
    const foundItem = livreurs[body.email]

    if (foundItem) {
      foundItem.email = body.email;
      foundItem.telephone = body.telephone;
      foundItem.nom = body.nom;
      foundItem.prenom = body.prenom;

      livreurs[foundItem.email] = foundItem;

      resolve(foundItem);
    } else {
      reject(new Error('Not found.'));
    }
  });
}


/**
 * create a new delivery man
 *
 * body Livreur_body 
 * no response value expected for this operation
 **/
exports.livreurPOST = function(body) {
  return new Promise(function(resolve, reject) {
    const newLivreur = {
      email: body.email,
      telephone: body.telephone,
      nom: body.nom,
      prenom: body.prenom,
    };

    livreurs[newLivreur.email] = newLivreur;

    resolve(newLivreur);
  });
}

