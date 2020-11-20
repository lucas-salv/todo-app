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

exports.putUser = (req, res, next) => {
    if(isNaN(req.params.id)){
        res.status(400).json({
            "error": "400 - Bad Request"
        });
    }

    const user = tb_users.find(user => user.id == req.params.id);

    if(user != undefined){
        const { name, email, pass, avatar_url } = req.body;
        name != undefined ? user.name = name : null;
        email != undefined ? user.email = email : null;
        pass != undefined ? user.pass = pass : null;
        avatar_url != undefined ? user.avatar_url = avatar_url : null;
    
        res.status(200).json({
            "success": "200 - Success",
            "users": tb_users
        });
    } else {
        res.status(404).json({
            "error": "404 - Not Found"
        });
    }

}