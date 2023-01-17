const jwt = require('jsonwebtoken');

// set token secret and expiration date
const secret = process.env.AUTH_SECRET ?? '1l8Cc43xsJ5pdp1XzMMr';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req body or query or headers
    let token =
      req.body?.token || req.query?.token || req.headers?.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers?.authorization) {
      token = token.split(' ').pop().trim();
    } else {
      return;
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      // add the user to the context
      return { user: data };
    } catch (err) {
      console.log(err);
    }
  },

  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
