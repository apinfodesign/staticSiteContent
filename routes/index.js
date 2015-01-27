var express = require('express');
var router = express.Router();

//set location of your jade content files
var contentFilepath = '/../../ContentMarkdownFiles/posts/'; 

 
var fs = require('fs');				 //imported from my first blog
var jade = require('jade');				 //imported from my first blog

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Full Screen', collectorArray: fileCollector });
});

/* GET contact page */
router.get('/pagecontent', function(req, res, next){
   res.render('ourprojects', { title: 'Full Screen' }); 
});

router.get('/bootstraptest', function(req, res, next){
   res.render('../public/indexbootstrap', { title: 'Full Screen' }); 
}); 

// regex find all .jade content files in posts directory 
var find = function(post_name, cb) {
    fs.readdir('./posts/', function(err, files) {
    	//console.log(files);
        if (files.indexOf(post_name + '.jade') !== -1) {
            fs.readFile(__dirname + contentFilepath + post_name + '.jade', function(err, data) {
                cb(jade.compile(data)() );
            })
        } 
        else
        {
        cb(null);
        }
    })
};

// intentionally outside of forEach scope
var blogPostFiles = fs.readdirSync(__dirname + '/../posts' ); 
var collector=[];      //collects file names
var fileCollector=[];  //collects file contents

////////////////////////////////
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


module.exports = router;
