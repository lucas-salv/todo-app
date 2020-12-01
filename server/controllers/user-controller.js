const { tb_users, tb_tasks } = require('./../models/database');
const jwt = require('./../utils/jwt');
const authCheck = require('./../utils/authCheck');
const formatError = require('./../utils/formatError');

exports.postUser = (req, res, next) => {
    try{
        const { name, email, pass, avatar_url } = req.body;
    
        const userValidate = tb_users.findIndex(user => user.email == email);
    
        if(userValidate == -1) {
            const user = {
                id: tb_users.length == 0 ? 1 : tb_users[tb_users.length-1].id+1,
                name,
                email,
                pass,
                avatar_url
            }

            const userGroupTask = {
                user_id: user.id,
                group_task: []
            }
        
            tb_users.push(user);
            tb_tasks.push(userGroupTask);
        
            delete user.pass;
        
            const token = jwt.sign({ user: user.id });
        
            res.status(201).json({
                "message": "201 - Created",
                user,
                token
            });
        } else {
            res.status(400).json({
                "message": "400 - Bad Request"
            });
        }
    } catch(err){
        res.status(500).json({
            "message": "500 - Internal Server Error"
        });
    }
}

exports.putUser = (req, res, next) => {
    try{
        if(isNaN(req.params.id)){
            res.status(400).json({
                "message": "400 - Bad Request"
            });
        }

        authCheck(req.auth, req.params.id);
    
        const user = tb_users.find(user => user.id == req.params.id);
    
        if(user != undefined){
            const { name, email, pass, avatar_url } = req.body;
            name != undefined ? user.name = name : null;
            email != undefined ? user.email = email : null;
            pass != undefined ? user.pass = pass : null;
            avatar_url != undefined ? user.avatar_url = avatar_url : null;
        
            res.status(200).json({
                "message": "200 - Success"
            });
        } else {
            res.status(404).json({
                "message": "404 - Not Found"
            });
        }
    } catch(err){
        formatError(err.message, res);
    }
}

exports.deleteUser = (req, res, next) => {
    try{
        if(isNaN(req.params.id)){
            res.status(400).json({
                "message": "400 - Bad Request"
            });
        }
    
        const index = tb_users.findIndex(user => user.id == req.params.id);
        const taskIndex = tb_tasks.findIndex(task => task.user_id == req.params.id);
    
        if(index == -1) {
            res.status(404).json({
                "message": "404 - Not Found"
            });
        } else {
            authCheck(req.auth, req.params.id);
            tb_users.splice(index, 1);
            tb_tasks.splice(taskIndex, 1);
            res.status(200).json({
                "message": "200 - Success"
            });
        }
    } catch(err){
        formatError(err.message, res);
    }
}