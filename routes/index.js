//Set the location of your jade content files!!!
var contentFilepath = '/../../ContentMarkdownFiles/posts/'; 

var express = require('express');
var router = express.Router();
var fs = require('fs');				 
var jade = require('jade');		 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Full Screen', collectorArray: gatherPostFiles(contentFilepath) });
});

/* GET contact page */
router.get('/pagecontent', function(req, res, next){
   res.render('ourprojects', { title: 'Full Screen' }); 
});

///give contentFilepath as argument when calling gatherPostFiles
var gatherPostFiles = function(arg){ 
	var contentFilepath = arg;
 	var blogPostFiles = fs.readdirSync(__dirname + contentFilepath ); 
	var collector=[];      //collects file names
	var fileCollector=[];  //collects file contents
	// regex find all .jade content files in posts directory 
	blogPostFiles.forEach(function cleanFiles (value, index, array){
		var infile;  //takes fs incoming file
		var pattern = new RegExp(".jade");   //match file .jade
		if ( pattern.test(value)  )  // file IS dot jade
			{
			inFile= fs.readFileSync( __dirname + contentFilepath + blogPostFiles[index]  );
			inFile = jade.render(inFile);   //make jade into html
			fileCollector.push(inFile);    //keep file content		
			collector.push(value);         //keep file name, not really needed?
			//console.log("Is a dot jade file.");
			}
		else
			{ //console.log("DID NOT FIND dot jade FILE."); 
			}
	return fileCollector;
	});
	//console.log(" collector is " + collector);
	//console.log(collector.length + " is length");
	//console.log("fileCollector is " + fileCollector);
	//console.log(fileCollector.length + " is fileCollector length");
return fileCollector;
};  //close gatherPostFiles


module.exports = router;
module.exports.gatherPostFiles = gatherPostFiles;


