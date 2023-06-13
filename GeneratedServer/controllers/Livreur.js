'use strict';

var utils = require('../utils/writer.js');
var Livreur = require('../service/LivreurService');

module.exports.livreurGET = function livreurGET (req, res, next) {
  Livreur.livreurGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.livreurNameDELETE = function livreurNameDELETE (req, res, next) {
  Livreur.livreurNameDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.livreurNameGET = function livreurNameGET (req, res, next, email, name, prenom) {
  Livreur.livreurNameGET(email, name, prenom)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.livreurNamePUT = function livreurNamePUT (req, res, next, body) {
  Livreur.livreurNamePUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.livreurPOST = function livreurPOST (req, res, next, body) {
  Livreur.livreurPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
