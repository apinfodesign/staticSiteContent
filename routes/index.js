//MAIN STATIC SITE GENERATOR
//Set the location of your jade content files!!!
var contentFilepath =  __dirname + "/../posts/";

// path.join(__dirname, "..", 'posts') ; 
var express = require('express');
var router = express.Router();
var fs = require('fs');				 
var jade = require('jade');
var fileimport2 = require('fileimport2'); //my import of this

var configure2 = require('fileimport2');  //import configuration json

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'A Parliament of Owls', 
     collectorArray: fileimport2.fileimport2(contentFilepath), 
     configurationFile: fileimport2.fileimport2/configure/siteConfigurationUser.json)
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
