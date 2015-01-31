// EXPRESS SERVER HERE //

// BASE SETUP
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    methodOverride = require('method-override'),
    routes = require('./app/routes'),
    morgan = require('morgan'),
    serveStatic = require('serve-static'),
    errorHandler = require('errorhandler');


// =========================CONFIGURATION===========================//
// =================================================================//
app.set('port', process.env.PORT || 9001); // Set to 9001 to not interfere with Gulp 9000
// If you're using Cloud9, or an IDE that uses a different port, process.env.PORT will 
// take care of your problems. You don't need to set a new port.
app.use(serveStatic('app', {'index': true})); // Set to True or False if you want to start on Index or not
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('dev'));
app.use(cookieParser('secret'));
app.use(session({secret: 'evernote now', resave: true, saveUninitialized: true}));
app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
});


if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler());
}
// ==========================ROUTER=================================//
// =================================================================//


// ROUTES FOR THE API - RUN IN THE ORDER LISTED

var router = express.Router();

// PUT ANY MIDDLEWARE HERE

router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});


// ------------- ROUTES ---------------- //




// REGISTERING THE ROUTES
app.use('/', router);

// STARTING THE SERVER

console.log('Serving on port ' + app.get('port') + '. Serving more Nodes than Big Macs!');
app.listen(app.get('port')); // Not used if Gulp is activated - it is bypassed
exports = module.exports = app; // This is needed otherwise the index.js for routes will not work
