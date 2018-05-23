const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri: 'mongodb://localhost:27017/blogDB1',
    secret: crypto,
    db : 'blogDB1'
}