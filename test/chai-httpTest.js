'use strict';

require("../httpServer");
var chai = require('chai');
var chaihttp = require("chai-http");

chai.use(chaihttp);

var expect = chai.expect;

describe('my http server',function(){
    it('should return the start response', function(done){
        chai.request('localhost:8080')
            .get('/start')
            .end(function(err,res){
                expect(err).to.eql(null);
                expect(res).to.have.status(200);
                expect(res.text).to.eql('ask for /time for current time, and /greet/[name] for a personalized greeting!');
                done();
            });
    });
    it('should return the current time', function(done){
        var now = new Date();
        chai.request('localhost:8080')
            .get('/time')
            .end(function(err,res){
                expect(err).to.eql(null);
                expect(res).to.have.status(200);
                expect(res.text).to.eql(now.toString());
                done();
            });
    });
    it('should return "me"', function(done){
        chai.request('localhost:8080')
            .get('/greeting/me')
            .end(function(err,res){
                expect(err).to.eql(null);
                expect(res).to.have.status(200);
                expect(res.text).to.eql('Welcome, me');
                done();
            });
    });
});