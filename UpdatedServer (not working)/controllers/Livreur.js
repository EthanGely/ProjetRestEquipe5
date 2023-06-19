'use strict';

var utils = require('../utils/writer.js');
var Livreur = require('../service/LivreurService');

module.exports.food_deliveryDelivery_nameLivreursLivreur_mailDELETE = function food_deliveryDelivery_nameLivreursLivreur_mailDELETE (req, res, next) {
  Livreur.food_deliveryDelivery_nameLivreursLivreur_mailDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.food_deliveryDelivery_nameLivreursLivreur_mailGET = function food_deliveryDelivery_nameLivreursLivreur_mailGET (req, res, next, email) {
  Livreur.food_deliveryDelivery_nameLivreursLivreur_mailGET(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.food_deliveryDelivery_nameLivreursLivreur_mailPUT = function food_deliveryDelivery_nameLivreursLivreur_mailPUT (req, res, next, body) {
  Livreur.food_deliveryDelivery_nameLivreursLivreur_mailPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.food_deliveryNameLivreursGET = function food_deliveryNameLivreursGET (req, res, next) {
  Livreur.food_deliveryNameLivreursGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.food_deliveryNameLivreursPOST = function food_deliveryNameLivreursPOST (req, res, next, body) {
  Livreur.food_deliveryNameLivreursPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
