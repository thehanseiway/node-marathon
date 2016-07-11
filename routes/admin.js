var express = require('express');
var router = express.Router();
var Post = require('../models/postSchema');

/* GET Admin page. */
router.get('/', function(req, res, next) {
    Post.find({}, function(err, posts) {
        if(err) {
            return res.status(500).json({message: err.message});
        }

        res.render('admin/admin', { posts: posts });
    });
});

module.exports = router;
