const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    // uri: 'mongodb://localhost:27017/blogDB1',
    uri: 'mongodb://agam:agam@ds135540.mlab.com:35540/angular-2-blogapp', // Production
    secret: crypto,
    db : 'angular-2-blogapp'
}