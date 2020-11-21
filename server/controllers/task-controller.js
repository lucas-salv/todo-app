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

exports.getTaskById = (req, res, next) => {
    if(isNaN(req.params.id)){
        res.status(400).json({
            "error": "400 - Bad Request"
        });
    }

    const gTasks = tb_tasks.filter(task => task.group_task_id == req.params.id);

    if(gTasks.length < 1) {
        res.status(404).json({
            "error": "404 - Not Found"
        });
    }

    res.json(gTasks);
}

exports.postGroupTask = (req, res, next) => {
    const { user_id, title_group_task } = req.body;

    if(user_id == undefined || title_group_task == undefined){
        res.status(400).json({
            "error": "400 - Bad Request"
        });
    } else {
        const newGroupTask = {
            user_id,
            group_task_id: tb_tasks.length == 0 ? 1 : tb_tasks[tb_tasks.length-1].group_task_id+1,
            title_group_task,
            tasks: []
        }
    
        tb_tasks.push(newGroupTask);
    
        res.status(201).json({
            "success": "201 - created",
        });
    }
}

exports.postTask = (req, res, next) => {
    if(isNaN(req.params.id)){
        res.status(400).json({
            "error": "400 - Bad Request"
        });
    } else {
        const { title_task, date } = req.body;
    
        if(!title_task) {
            res.status(400).json({
                "error": "400 - Bad Request"
            });
        } else {
            const [ task ] = tb_tasks.filter(task => task.group_task_id == req.params.id);

            const newTask = {
                task_id: task.tasks.length == 0 ? 1 : task.tasks[task.tasks.length-1].task_id+1,
                title_task,
                desc_task: "",
                tags: [],
                date
            }

            task.tasks.push(newTask);

            res.status(201).json({
                "success": "201 - created"
            });
        }
    }
}