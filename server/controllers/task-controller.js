const { tb_tasks } = require('./../models/database');

exports.getTasks = (req, res, next) => {
    try{
        if(isNaN(req.params.user_id)){
            return res.status(400).json({
                "message": "400 - Bad Request"
            });
        }
    
        const [gTasks] = tb_tasks.filter(gtask => gtask.user_id == req.params.user_id);
    
        if(!gTasks){
            return res.status(404).json({
                "message": "404 - Not Found"
            });
        }
    
        res.json(gTasks);

    } catch(err) {
        res.status(500).json({
            "message": "500 - Internal Server Error"
        });
    }
}

exports.postGroupTask = (req, res, next) => {
    try {
        const { user_id, title_group_task } = req.body;
    
        if(!user_id || !title_group_task){
            return res.status(400).json({
                "message": "400 - Bad Request"
            });
        }
    
        const [userTaskGroup] = tb_tasks.filter(userTaskGroup => userTaskGroup.user_id == user_id);
        
        const newGroupTask = {
            id: userTaskGroup.group_task.length == 0 ? 1 : userTaskGroup.group_task[userTaskGroup.group_task.length-1].id+1,
            title_group_task,
            tasks: []
        }
    
        userTaskGroup.group_task.push(newGroupTask);
    
        res.status(201).json({
            "message": "201 - Created"
        });
    } catch(err){
        res.status(500).json({
            "message": "500 - Internal Server Error"
        });
    }
}

exports.postTask = (req, res, next) => {
    try {
        const { user_id, group_task_id, title_task, date } = req.body;
        
        if(!title_task) {
            return res.status(400).json({
                "message": "400 - Bad Request"
            });
        }
    
        const [gTask] = tb_tasks.filter(userTaskGroup => userTaskGroup.user_id == user_id)[0]
                                        .group_task.filter(gTask => gTask.id == group_task_id);
    
    
        const newTask = {
            task_id: gTask.tasks.length == 0 ? 1 : gTask.tasks[gTask.tasks.length-1].task_id+1,
            title_task,
            desc_task: "",
            tags: [],
            date
        }
    
        gTask.tasks.push(newTask);
    
        res.status(201).json({
            "message": "201 - Created"
        });
    } catch(err) {
        res.status(500).json({
            "message": "500 - Internal Server Error"
        });
    }
}

exports.putGroupTask = (req, res, next) => {
    try{
        if(isNaN(req.params.id)){
            res.status(400).json({
                "message": "400 - Bad Request"
            });
        }
        
        const { user_id, title_group_task } = req.body;
    
        const gTask = tb_tasks.find(userTaskGroup => userTaskGroup.user_id == user_id).group_task.find(gtask => gtask.id == req.params.id);
    
        if(!gTask) {
            return res.status(404).json({
                "message": "404 - Not Found"
            });
        }

        title_group_task != undefined ? gTask.title_group_task = title_group_task : null;

        res.status(200).json({
            "message": "200 - Success"
        });
        
    } catch(err){
        res.status(500).json({
            "message": "500 - Internal Server Error"
        });
    }
}

exports.putTask = (req, res, next) => {
    try{
        if(isNaN(req.params.id)) {
            res.status(400).json({
                "message": "400 - Bad Request"
            });
        }
    
        const { user_id, group_task_id, title_task, desc_task, checked, tags } = req.body;
    
        const task = tb_tasks.find(userTaskGroup => userTaskGroup.user_id == user_id)
                              .group_task.find(gtask => gtask.id == group_task_id)
                              .tasks.find(task => task.task_id == req.params.id);
    
        if(!task) {
            return res.status(404).json({
                "message": "404 - Not Found"
            });
        }
    
        title_task != undefined ? task.title_task = title_task : null;
        desc_task != undefined ? task.desc_task = desc_task : null;
        checked != undefined ? task.checked = checked : null;
        tags.length != 0 ? task.tags = tags : null;
    
        res.status(200).json({
            "message": "200 - Success"
        });

    } catch(err){
        res.status(500).json({
            "message": "500 - Internal Server Error"
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