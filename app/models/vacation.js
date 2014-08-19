'use strict';

function Vacation(o){
  this.name   = o.name;
  this.start  = parseFloat(o.start);
  this.end    = parseFloat(o.end);
  this.lat    = parseFloat(o.lat);
  this.lng    = parseFloat(o.lng);
  this.photo  = [];
}

Object.defineProperty(Vacation, 'collection', {
  get: function(){return global.mongodb.collection('vacations');}
});

Vacation.all = function(cb){
  Vacation.collection.find().toArray(cb);
};


module.exports = Vacation;
