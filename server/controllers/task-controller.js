const { tb_tasks } = require('./../models/database');

exports.getTasks = (req, res, next) => {
    const query = Object.entries(req.query);
    if(query.length > 0){
        let tasks = [];
        for(let i = 0; i < query.length; i++) {
            tasks = tb_tasks.filter(task => task[query[i][0]] == query[i][1]);
        }
    
        if(tasks.length < 1) {
            res.status(404).json({
                error: "404 - Not Found"
            });
        } else {
            res.json(tasks);
        }

    } else {
        res.json(tb_tasks);
    }
}