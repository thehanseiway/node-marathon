var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var Blog = require('./models/postSchema');

var mongoServer = 'localhost:27017/marathon';

mongoose.connect('mongodb://' + mongoServer);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('Connected succesfully to ' + mongoServer);
});
