// dependencies 
var express = require("express"); 
var logger = require("morgan"); 
var mongoose = require("mongoose"); 

// scraping tools
var axios = require("axios"); 
var cheerio = require("cheerio"); 

// required models 
var db = require("./models"); 

require("./config/routes")(axios); 

var PORT = process.env.PORT || 3000; 

// initialize express 
var app = express(); 

// middleware 
app.use(logger("dev")); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

// public static folder 
app.use(express.static("public")); 

// If deployed, use the deployed database. Otherwise, use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines'; 
mongoose.connect(MONGODB_URI); 

app.listen(PORT, function(){
    console.log("Listening on port: " + PORT); 
}); 

