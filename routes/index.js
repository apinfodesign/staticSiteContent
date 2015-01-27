var express = require('express');
var router = express.Router();
//var bootstrap = require('bootstrap') 


//var posts = require('..posts');   //imported from my first blog
var fs = require('fs');				 //imported from my first blog
var jade = require('jade');				 //imported from my first blog


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Full Screen', collectorArray: fileCollector });

});

router.get('/pagecontent', function(req, res, next){
   res.render('ourprojects', { title: 'Full Screen' }); 
});

// router.get('/bootstraptest', function(req, res, next){
//    res.render('../public/indexbootstrap', { title: 'Full Screen' }); 
// }); 

//////added from 11a ////////////

var find = function(post_name, cb) {
    fs.readdir('./posts/', function(err, files) {

    	console.log(files);

        if (files.indexOf(post_name + '.jade') !== -1) {
            fs.readFile(__dirname + '/../posts/' + post_name + '.jade', function(err, data) {
                cb(jade.compile(data)() );
            })
        } else {
            cb(null);
        }
    })
}

var blogPostFiles = fs.readdirSync(__dirname + '/../posts' ); 
var collector=[];
var fileCollector=[];
//console.log("blogpostfiles " + blogPostFiles);

////////////////////////////////
blogPostFiles.forEach(function cleanFiles (value, index, array){
	var infile;
	var pattern = new RegExp(".jade");

	if ( pattern.test(value)  )  // file IS dot jade
		{
		
		inFile= fs.readFileSync( __dirname + '/../posts/'+ blogPostFiles[index]  );
		
		inFile = jade.render(inFile);   //make jade into html

		fileCollector.push(inFile);
		
		collector.push(value);
		console.log("Is a dot jade file.");}

	else
		{ 
		  console.log("DID NOT FIND dot jade FILE."); 
		}
//console.log(collector);

	
return fileCollector;
});

//console.log(" collector is " + collector);
//console.log(collector.length + " is length");
console.log("fileCollector is " + fileCollector);
console.log(fileCollector.length + " is fileCollector length");

module.exports = router;
