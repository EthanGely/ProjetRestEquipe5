'use strict';


/**
 * List all food delivery platform
 *
 * no response value expected for this operation
 **/

const foodPlateforms = require('../foodPlateforms.json');
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
 * no response value expected for this operation
 **/
exports.food_deliveryNameDELETE = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get one food delivery platform
 *
 * nom String page of results to return (optional)
 * no response value expected for this operation
 **/
exports.food_deliveryNameGET = function(nom) {
  return new Promise(function(resolve, reject) {
    console.log(foodPlateforms);
    const foundItem = foodPlateforms[nom];
    console.log(foundItem);
    if(foundItem){
      console.log(1);
      resolve(foundItem);
    
    }else{
      console.log(2);
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

