# scrapesomenews

## Description 
This is a web application that lets users view and leave comments on articles that are scraped from the Cosmopolitan website by using the npm packages Mongoose and Cheerio. 

## Usage 
- When the user visits this webpage, they will be able to scrape stories from the Cosmopolitan website by clicking on the Scrape button at the top of the page. This will prompt the scraped articles to be displayed on this page. 
- Each scraped article is saved to a database for the user. If the user clicks on the Scrape button again, duplicate articles will not be saved. 
- Each article will display the following information about each article: 
    Headline (the title of the article) 
    Summary (a short summary of the article) 
    URL (the url to the original article) 
    Image (the image displayed alongside the article to make it more visually appealing) 
- The user will be able to leave comments on the articles displayed and revisit them later since their comments will also be saved to the database with that particular article. This will allow the user to revisit the site and see articles posted by other users and comments made by them at a different time. 
- The user will be able to delete any comments made on the articles. 
- All stored comments will be visible to every user. 

## Technology Used 
This application was created using the following npm packages: 
- express 
- express-handlebars 
- mongoose 
- cheerio 
- axios 

## Deployed Link 
Please click on the following link to view the most recently deployed version: 