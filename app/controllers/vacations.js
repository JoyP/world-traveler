'use strict';

var Vacation = require('../models/vacation'),
    moment   = require('moment');

exports.index = function(req,res){
  Vacation.all(function(err, vacations){
    res.render('vacations/index', {vacations:vacations, moment:moment});
  });
};

exports.newVacation = function(req,res){
  res.render('vacations/newVacation');
};

exports.create = function(req,res){
  Vacation.create(req.body, function(){
    res.redirect('/vacations');
  });
};
