const jwt = require('jsonwebtoken');

const secret = 'mysecrets3';
const expiration = '2h';

module.exports = {
  signToken: function ({ username, email, _id}) {
    const payload = { username, email, _id};

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
  }
}