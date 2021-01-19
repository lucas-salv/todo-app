const { tb_tasks } = require('./../models/database');
const formatError = require('./../utils/formatError');

exports.getTasks = (req, res, next) => {
    try{
        
        const [gTasks] = tb_tasks.filter(gtask => gtask.user_id == req.auth.id);
        
        if(!gTasks){
            return res.status(404).json({
                "message": "404 - Not Found"
            });
        }

        res.json(gTasks);

    } catch(err) {
        formatError(err.message, res);
    }
}

exports.postGroupTask = (req, res, next) => {
    try {
        const { title_group_task } = req.body;
    
        const [userTaskGroup] = tb_tasks.filter(userTaskGroup => userTaskGroup.user_id == req.auth.id);
        
        const newGroupTask = {
            id: userTaskGroup.group_task.length == 0 ? 1 : userTaskGroup.group_task[userTaskGroup.group_task.length-1].id+1,
            title_group_task: title_group_task || 'Sem nome',
            tasks: []
        }
    
        userTaskGroup.group_task.push(newGroupTask);

        io.emit('addGroup', newGroupTask);
    
        res.status(201).json({
            "message": "201 - Created"
        });
    } catch(err){
        formatError(err.message, res);
    }
}

exports.postTask = (req, res, next) => {
    try {
        const { group_task_id, title_task } = req.body;
    
        const [gTask] = tb_tasks.filter(userTaskGroup => userTaskGroup.user_id == req.auth.id)[0]
                                        .group_task.filter(gTask => gTask.id == group_task_id);
    
    
        const newTask = {
            task_id: gTask.tasks.length == 0 ? 1 : gTask.tasks[gTask.tasks.length-1].task_id+1,
            title_task: title_task || '',
            desc_task: "",
            tags: [],
            date: new Date()
        }
    
        gTask.tasks.push(newTask);

        io.emit('addNewTask', gTask);
    
        res.status(201).json({
            "message": "201 - Created"
        });
    } catch(err) {
        formatError(err.message, res);
    }
}

exports.putGroupTask = (req, res, next) => {
    try{
        if(isNaN(req.params.id)){
            res.status(400).json({
                "message": "400 - Bad Request"
            });
        }
        
        const { title_group_task } = req.body;
    
        const gTask = tb_tasks.find(userTaskGroup => userTaskGroup.user_id == req.auth.id).group_task.find(gtask => gtask.id == req.params.id);
    
        if(!gTask) {
            return res.status(404).json({
                "message": "404 - Not Found"
            });
        }

        title_group_task != undefined ? gTask.title_group_task = title_group_task : null;

        io.emit('editGroup', gTask);

        res.status(200).json({
            "message": "200 - Success"
        });
        
    } catch(err){
        formatError(err.message, res);
    }
}

exports.putTask = (req, res, next) => {
    try{
        if(isNaN(req.params.id)) {
            res.status(400).json({
                "message": "400 - Bad Request"
            });
        }
    
        const { group_task_id, title_task, desc_task, checked, tags } = req.body;

        const gTask = tb_tasks.find(userTaskGroup => userTaskGroup.user_id == req.auth.id)
                              .group_task.find(gtask => gtask.id == group_task_id);
    
        const task = gTask.tasks.find(task => task.task_id == req.params.id);
    
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
        formatError(err.message, res);
    }
}

exports.deleteGroupTask = (req, res, next) => {
    try{
        if(isNaN(req.params.group_id)) {
            res.status(400).json({
                "message": "400 - Bad Request"
            });
        }
    

        const gTask = tb_tasks.find(userGroup => userGroup.user_id == req.auth.id);
        const groupIndex = tb_tasks.find(userGroup => userGroup.user_id == req.auth.id)
                                   .group_task.findIndex(gtask => gtask.id == req.params.group_id);
    
        if(groupIndex == -1) {
            return res.status(404).json({
                "message": "404 - Not Found"
            });
        }

        const groupRemoved = gTask.group_task[groupIndex];

        io.emit('removeGroup', groupRemoved);

        gTask.group_task.splice(groupIndex, 1);
        res.status(200).json({
            "message": "200 - Success"
        });
    } catch(err){
        formatError(err.message, res);
    }
}

exports.deleteTask = (req, res, next) => {
    try{
        if(isNaN(req.params.group_id) || isNaN(req.params.task_id)) {
            res.status(400).json({
                "message": "400 - Bad Request"
            });
        }

        const gTask = tb_tasks.find(userGroup => userGroup.user_id == req.auth.id).group_task
        .find(gtask => gtask.id == req.params.group_id);

        if(!gTask) {
            return res.status(404).json({
                "message": "404 - Not Found"
            });
        }
    
        const taskIndex = gTask.tasks.findIndex(task => task.task_id == req.params.task_id);
    
        if(taskIndex == -1) {
            return res.status(404).json({
                "message": "404 - Not Found"
            });
        }


        gTask.tasks.splice(taskIndex, 1);
        res.status(200).json({
            "message": "200 - Success"
        });
    } catch(err){
        formatError(err.message, res);
    }
}