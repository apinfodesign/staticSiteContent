//MAIN STATIC SITE GENERATOR
//Set the location of your jade content files!!!
var contentFilepath =  __dirname + "/../posts/";

// path.join(__dirname, "..", 'posts') ; 
var express = require('express');
var router = express.Router();
var fs = require('fs');				 
var jade = require('jade');
var fileimport = require('fileimport'); //my import of this


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'A Parliament of Owls', 
     collectorArray: fileimport.fileimport(contentFilepath)
  	   });
});

/* GET contact page */
router.get('/pagecontent', function(req, res, next){
   res.render('ourprojects', { title: 'A Parliament of Owls'}); 
});

/* GET activate page */
router.get('/activate', function(req, res, next){
   res.render('activate', { title: 'A Parliament of Owls'}); 
});

module.exports = router;


 

