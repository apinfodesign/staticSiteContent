var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

////added from 11a ////////////
var posts = require('./posts');

router.param('post_name', function(request, response, next, post_name){
    //note: we'll define posts.find in a minute
    posts.find(post_name, function(post) {
        if(post) {
            request.post = post;
            next();
        } else {
            return next(new Error('no such post as ' + post_name + '!'))
        }
    });
});

router.get('/posts/:post_name', function(request, response) {
    response.render('post', {post: request.post});
});
////////////// added from 11subla

module.exports = router;
