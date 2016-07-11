var express = require('express');
var router = express.Router();
var Post = require('../models/postSchema');

/* GET home page. */
router.get('/', function(req, res, next) {
    Post.find({}, function(err, posts) {
        if(err) {
            return res.status(500).json({message: err.message});
        }

        res.render('index', { posts: posts });
    });
});

module.exports = router;
