'use strict'
const express = require('express')
var session = require('express-session');
const parser = require('body-parser');
const rest = require('./controller/restcall.js');
var app = express()
var applicationName=()=>"Airlines Reservation System";
app.set('view engine', 'pug')
app.use(express.static(__dirname));
app.use(parser.json() );       // to support JSON-encoded bodies
app.use(parser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var user={
	'username':'praveen.baregala',
	'useremail':'praveen.baregala@capgemini.com',
	'creditcard':'4125879632544125'
}

var book={
		'seatNumber': "FL-"+getRandomInt(9999),
		'bookingId': getRandomInt(99999),
		'creditcardInfo': "4125879632544125",
		'customerEmail': 'test@playtech.com',
	  	'classType': 'test',
	  	'srcCity': 'test',
	  	'destCity': 'test',
	  	'noOfPassengers': 1,
	  	'totalFare': 1
	}
app.get('/', function (req, resp) {
	var flight="";
	let promise=rest.getFlights('http://localhost:8080/flights');
		promise.then((resolve)=>{
			resp.render('flights',{flights:resolve});
		},(reject)=>{
			resp.render('error',{message:reject});
		});
})

app.all('/bookingform', function (req, resp) {
	resp.render('booking');
})
app.all('/booking', function (req, resp,body) {
	book.customerEmail=user.useremail;
	book.classType=req.body.class;
	book.srcCity=req.body.from;
	book.destCity=req.body.destination;
	book.noOfPassengers=req.body.noPeople;
	book.totalFare=req.body.totalfare;
	console.log(book)
let promise=rest.bookFlight('http://localhost:8080/book',book);
	promise.then((resolve)=>{
		resp.render('success');
	},(reject)=>{
		resp.render('error',{message:reject});
	});
})

app.listen(8000,function(){
	console.log(applicationName()+" is running");
});
