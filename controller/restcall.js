const express = require('express')
const request = require('request');
const parser = require('body-parser');
var app = express()
app.use(parser.json() );       // to support JSON-encoded bodies
app.use(parser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
var getFlights=function(url){
	return promise = new Promise(function(resolve, reject) {
	request(url, { json: true }, (err, res, body) => {
			if (err) { 
				reject(err)
			}
			resolve(res.body);
		});	
	});	
}

var bookFlight=function(url,body){
	return promise = new Promise(function(resolve, reject) {
  		request.post(url, 
				{ json:body}, 
				(error, res, body) => {
					if (error) {
					reject(error)
				}
			resolve(res);	
		});
	});	
}
module.exports={getFlights,bookFlight}