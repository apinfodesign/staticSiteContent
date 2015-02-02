//MAIN STATIC SITE GENERATOR
//Set the location of your jade content files!!!
var contentFilepath =  __dirname + "/../posts/";
// path.join(__dirname, "..", 'posts') ; 

var configureFilePath = __dirname + "/../node_modules/fileimport2/configure/";


var express = require('express');
var router = express.Router();
var fs = require('fs');				 
var jade = require('jade');
var fileimportAssignment = require('fileimport2'); 

 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'A Parliament of Owls', 
     collectorArray: fileimportAssignment.fileimport2(contentFilepath), 
     configurationFile: fileimportAssignment.configure2(configureFilePath)
  	   });
 });


/* GET contact page */
router.get('/pagecontent', function(req, res, next){
   res.render('ourprojects', { title: 'A Parliament of Owls', 
   configurationFile: fileimportAssignment.configure2(configureFilePath)
	}); 
});

/* GET activate page */
router.get('/activate', function(req, res, next){
   res.render('activate', { title: 'A Parliament of Owls', 
     configurationFile: fileimportAssignment.configure2(configureFilePath)
   }); 
});


module.exports = router;

