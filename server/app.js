var express = require('express');
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    app = express(),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bluebird = require('bluebird'),
    passport = require('passport'),
    session = require('express-session'),
    config = require('./config/config'),
    port = process.env.PORT || config.port,
    api = require('./routes/api.route');

mongoose.Promise = bluebird;
mongoose.connect(config.databaseConnectionString, { useNewUrlParser: true }).then(()=> { console.log(`Succesfully Connected to the Mongodb Database`)});

require('./routes/middlewares/passport');
app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session()); 
app.use(express.static(path.join(__dirname, '../client/cinema-app/dist/cinema-app')));

app.use('/api', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/cinema-app/dist/cinema-app/index.html'));
});

app.listen(port, function () {
  console.log("Node running on port:", port);
});

module.exports = app;