'use strict';
const foodPlateforms = require('../foodPlateforms.json');

/**
 * List all food delivery platform
 *
 * no response value expected for this operation
 **/
exports.food_deliveryGET = function() {
  return new Promise(function(resolve, reject) {
    const data = {
      name: "platform de livraison",
      links: [
        {
          href: '/',
          rel: 'self',
          method: 'PUT'
        },
        {
          href: '/Restaurant',
          rel: 'restaurants',
          method: 'GET'
        },
        {
          href: `/Restaurant`,
          rel: 'restaurants',
          methods: 'POST'
        },
        {
          href: '/Client',
          rel: 'clients',
          method: 'GET'
        },
        {
          href: `/Client`,
          rel: 'clients',
          methods: 'POST'
        },
        {
          href: '/Livreur',
          rel: 'livreurs',
          method: 'GET'
        },
        {
          href: `/Livreur`,
          rel: 'livreurs',
          methods: 'POST'
        }
      ]
    };

    resolve(data);
  });
}


/**
 * delete a food delivery platform
 *
 * name String nom de la plateforme
 * no response value expected for this operation
 **/
exports.food_deliveryNameDELETE = function(name) {
  return new Promise(function(resolve, reject) {
    const foundItem = foodPlateforms[name];
    if(foundItem){
      delete foodPlateforms[name];
      resolve(name + " à bien était supprimer");
    }else{
      resolve("erreur nom de food delivery invalide");
    }
  });
}


/**
 * Get one food delivery platform
 *
 * name String nom de la plateforme
 * no response value expected for this operation
 **/
exports.food_deliveryNameGET = function(name) {
  return new Promise(function(resolve, reject) {
    const foundItem = foodPlateforms[name];
    if (foundItem) {
      resolve(foundItem);
    } else {
      resolve(["pas trouvé"]);
    }
  });
}


/**
 * update a food delivery platform
 *
 * body Food_delivery_name_body 
 * no response value expected for this operation
 **/
exports.food_deliveryNamePUT = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * create a new food delivery platform
 *
 * body Food_delivery_body 
 * no response value expected for this operation
 **/
exports.food_deliveryPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

