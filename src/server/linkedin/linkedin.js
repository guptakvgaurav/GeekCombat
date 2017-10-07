const config = require('./config')
var Linkedin = require('node-linkedin')(config.linkedIn.clientID, config.linkedIn.clientSecret);

var linkedin = Linkedin.init('my_access_token');


