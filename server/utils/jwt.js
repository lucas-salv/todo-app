const jwt = require('jsonwebtoken');

exports.sign = payload => jwt.sign(payload, process.env.SECRET, { expiresIn: 86400 });
exports.verify = token => jwt.verify(token, process.env.SECRET);