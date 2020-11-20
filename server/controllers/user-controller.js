const { tb_users } = require('./../models/database');

exports.postUser = (req, res, next) => {
    const { name, email, pass, avatar_url } = req.body;

    const user = {
        id: tb_users[tb_users.length-1].id+1,
        name,
        email,
        pass,
        avatar_url
    }

    tb_users.push(user);

    res.status(201).json({
        "success": "201 - created"
    });
}