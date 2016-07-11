var express = require('express');
var router = express.Router();
var Post = require('../models/postSchema');

// Add post
router.get('/', function(req, res, next) {
    res.render('admin/add-post');
});

// Add
router.post('/', function(req, res, next) {
    var postData = req.body;


    Post.find({'title': postData.title}, function(err, posts) {
        if(!err && !posts.length) {
            Post.create(postData, function(err, post) {

                if(err) {
                    console.log( 'Error adding new post!' );
                } else {
                    console.log( 'Post saved!' );
                    res.redirect('/admin');
                }

            });
        } else {
            res.send('Title exists!');
        }
    });

});

module.exports = router;
