/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';

var expect    = require('chai').expect,
    Vacation  = require('../../app/models/vacation'),
    dbConnect = require('../../app/lib/mongodb'),
    cp        = require('child_process'),
    db        = 'template-test';

describe('Person', function(){
  before(function(done){
    dbConnect(db, function(){
      done();
    });
  });

  beforeEach(function(done){
    cp.execFile(__dirname + '/../scripts/clean-db.sh', [db], {cwd:__dirname + '/../scripts'}, function(err, stdout, stderr){
      done();
    });
  });

  describe('constructor', function(){
    it('should create a new Vacation object', function(){
      var vac = {name:'Blackheath, Australia',start:1413092100000,end:1414042565000,lat:-33.646636,lng:150.284986},
          v   = new Vacation(vac);
      expect(v).to.be.instanceof(Vacation);
      expect(v.name).to.equal('Blackheath, Australia');
      expect(v.start).to.equal(1413092100000);
      expect(v.end).to.equal(1414042565000);
      expect(v.lat).to.equal(-33.646636);
      expect(v.lng).to.equal(150.284986);
    });
  });

  describe('.all', function(){
    it('should get all vacations', function(done){
      Vacation.all(function(err, vacations){
        expect(vacations).to.have.length(3);
        done();
      });
    });
  });
});

