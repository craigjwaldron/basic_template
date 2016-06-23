var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded( { extended: false } );
var pg = require("pg");
var connectionString = 'postgres://localhost:5432/to_do'; /// CHANGE DATABASE ///

// Setting up static page ------------------------------------------------------------------------------------------------------
app.use ( express.static( "public" ));

// Route to index.html (resovled path to html)-------------------------------------------------------------------------------------------------------
app.get ("/", function( req, res ){
  res.sendFile( path.resolve("views/index.html"));
});

// console.log("hello from app.js");

// On the server-------------------------------------------------------------------------------------------------------
app.listen ( 3000, "localhost", function( req, res ){
  console.log( "listening from server 3000" );
});
