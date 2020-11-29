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
                "message": "404 - Not Found"
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
            "message": "400 - Bad Request"
        });
    }

    const gTasks = tb_tasks.filter(task => task.group_task_id == req.params.id);

    if(gTasks.length < 1) {
        return res.status(404).json({
            "message": "404 - Not Found"
        });
    }

    res.json(gTasks);
}

exports.postGroupTask = (req, res, next) => {
    const { user_id, title_group_task } = req.body;

    if(user_id == undefined || title_group_task == undefined){
        res.status(400).json({
            "message": "400 - Bad Request"
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
            "message": "201 - Created",
        });
    }
}

exports.postTask = (req, res, next) => {
    if(isNaN(req.params.id)){
        res.status(400).json({
            "message": "400 - Bad Request"
        });
    } else {
        const { title_task, date } = req.body;
    
        if(!title_task) {
            res.status(400).json({
                "message": "400 - Bad Request"
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
                "message": "201 - Created"
            });
        }
    }
}

exports.putGroupTask = (req, res, next) => {
    if(isNaN(req.params.id)){
        res.status(400).json({
            "message": "400 - Bad Request"
        });
    }

    const groupTask = tb_tasks.find(task => task.group_task_id == req.params.id);

    if(groupTask != undefined) {
        const { title_group_task } = req.body;
        title_group_task != undefined ? groupTask.title_group_task = title_group_task : null;

        res.status(200).json({
            "message": "200 - Success"
        });
    } else {
        res.status(404).json({
            "message": "404 - Not Found"
        });
    }
}

exports.putTask = (req, res, next) => {
    if(isNaN(req.params.id)) {
        res.status(400).json({
            "message": "400 - Bad Request"
        });
    }

    const { group_task_id, title_task, desc_task, checked, tags } = req.body;

    const gTask = tb_tasks.find(gtask => gtask.group_task_id == group_task_id);

    if(gTask == undefined) {
        return res.status(404).json({
            "message": "404 - Not Found"
        });
    }
    
    const task = gTask.tasks.find(task => task.task_id == req.params.id);

    if(task != undefined) {
        title_task != undefined ? task.title_task = title_task : null;
        desc_task != undefined ? task.desc_task = desc_task : null;
        checked != undefined ? task.checked = checked : null;
        tags.length != 0 ? task.tags = tags : null;

        res.status(200).json({
            "message": "200 - Success"
        });
    } else {
        res.status(404).json({
            "message": "404 - Not Found"
        });
    }
}

exports.deleteGroupTask = (req, res, next) => {
    if(isNaN(req.params.id)) {
        res.status(400).json({
            "message": "400 - Bad Request"
        });
    }

    const groupIndex = tb_tasks.findIndex(gTask => gTask.group_task_id == req.params.id);

    if(groupIndex == -1) {
        res.status(404).json({
            "message": "404 - Not Found"
        });
    } else {
        tb_tasks.splice(groupIndex, 1);
        res.status(200).json({
            "message": "200 - Success"
        });
    }
}

exports.deleteTask = (req, res, next) => {
    if(isNaN(req.params.group_id) && isNaN(req.params.task_id)) {
        res.status(400).json({
            "message": "400 - Bad Request"
        });
    }

    const gTask = tb_tasks.find(gtask => gtask.group_task_id == req.params.group_id);

    if(gTask == undefined) {
        return res.status(404).json({
            "message": "404 - Not Found"
        });
    }

    const taskIndex = gTask.tasks.findIndex(task => task.task_id == req.params.task_id);

    if(taskIndex == -1) {
        res.status(404).json({
            "message": "404 - Not Found"
        });
    } else {
        gTask.tasks.splice(taskIndex, 1);
        res.status(200).json({
            "message": "200 - Success"
        });
    }
}