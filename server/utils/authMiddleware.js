const jwt = require('./jwt');
const { tb_users } = require('./../models/database');

module.exports = (req, res, next) => {
    try {
        const [, token] = req.headers.authorization.split(' ');
    
        jwt.verify(token, function(err, decoded){
            if(err) {
                return res.status(401).json({
                    "message": "401 - unauthorized"
                });
            }
    
            const user = tb_users.find(user => user.id == decoded.user);
    
            delete user.pass;
    
            req.auth = user;
    
            next();
        })

    } catch(err) {
        return res.status(401).json({
            "message": "401 - unauthorized"
        })
    }
}