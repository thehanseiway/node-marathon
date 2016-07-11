'use strict';
var mongoose = require('mongoose');
var Post = require('./models/postSchema');

var postData = [{
    title:  'Hello POST',
    author: 'Roscovan Vlad',
    body:   '<p>HELLO WORLD CONTENT</p>',
    comments: [{ body: 'nice post!', date: new Date().now }],
    hidden: false,
    meta: {
        votes: 0,
        favs:  0
    }
}, {
    title:  'About all this',
    author: 'Roscovan Vlad',
    body:   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quos culpa corrupti perferendis nemo nisi assumenda inventore atque numquam voluptatum.',
    comments: [{ body: 'nice post!', date: new Date().now }],
    hidden: false,
    meta: {
        votes: 0,
        favs:  0
    }
}];

postData.forEach(function(post, index) {

    Post.find({'title': post.title}, function(err, posts) {
        if(!err && !posts.length) {
            Post.create(post, function(err, post) {

                if(err) {
                    console.log( 'Error adding new post!' );
                } else {
                    console.log( 'Post saved!' );
                }

            });
        }
    });

});
