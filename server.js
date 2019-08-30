var express = require("express"); 
var logger = require("morgan"); 
var mongoose = require("mongoose"); 

var axios = require("axios"); 
var cheerio = require("cheerio"); 

var db = require("./models"); 

var PORT = 3000; 

var app = express(); 

app.use(logger("dev")); 
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use(express.static("public")); 

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines'; 
mongoose.connect(MONGODB_URI); 


app.get("/scrape", function(req, res) {
    axios.get("https://www.vogue.com/").then(function(response){
        var $ = cheerio.load(response.data); 
        $("four-story--title").each(function(i, element){
            var result = {}; 

            result.title = $(this)
            .children("a")
            .text(); 
            result.link = $(this)
            .children("a")
            .attr("href"); 

            db.Article.create(result)
            .then(function(dbArticle){
                console.log(dbArticle); 
            })
            .catch(function(err){
                console.log(err); 
            })

            }
        })

    })
})


// daily-article-title h3

