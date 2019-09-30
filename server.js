// required dependencies 
var express = require("express"); 
var exphbs = require("express-handlebars"); 
var logger = require("morgan"); 
var mongoose = require("mongoose"); 
var axios = require("axios"); 
var cheerio = require("cheerio"); 
var bodyParser = require("body-parser"); 

var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines"; 

// mongoose.connect(db, function(error){
//     if (error){
//         console.log(error); 
//     }
//     else {
//         console.log("mongoose is connected"); 
//     }
// }); 

// sets up port 
var PORT = process.env.PORT || 3000; 

var app = express(); 
var router = express.Router(); 

app.engine("handlebars", exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.use(logger("dev")); 
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use(express.static(__dirname + "/public")); 
app.use(bodyParser.urlencoded({extended: false})); 
app.use(router); 


var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines'; 
mongoose.connect(MONGODB_URI); 


// app.get("/scrape", function(req, res) {
//     axios.get("https://www.cosmopolitan.com/").then(function(response){
//         var $ = cheerio.load(response.data); 
//         var results = [];
//         $(".full-item").each(function(i, element){
//             var result = {}; 

//             result.title = $(this)
//             .find(".full-item-title")
//             .text(); 
//             result.link = "www.cosmopolitan.com" + $(this)
//             .find(".full-item-title")
//             .attr("href"); 
//             result.image = $(this)
//             .find('.full-item-image > img')
//             .attr('src');
//             result.summary = $(this)
//             .find(".full-item-dek")
//             .text(); 
//             results.push(result);
//         })

//         db.Article.insertMany(results)
//         .then(function(dbArticle){
//             console.log(dbArticle); 
//         })
//         .catch(function(err){
//             console.log(err); 
//         })
//     })
// })

// app.get("/", function(req, res){
//     res.render('index', {})
// })

app.listen(PORT, function(){
    console.log("Listening on port: http://localhost:"+ PORT); 
});