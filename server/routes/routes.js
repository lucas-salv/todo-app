const express = require('express');
const router = express.Router();
const userController = require('./../controllers/user-controller');
const taskController = require('./../controllers/task-controller');

// user routes
router.post('/user', userController.postUser);
router.put('/user/:id', userController.putUser);
router.delete('/user/:id', userController.deleteUser);

// task routes
router.get('/tasks', taskController.getTasks);
router.get('/task/:id', taskController.getTaskById);
router.post('/group-task', taskController.postGroupTask);
router.post('/task/:id', taskController.postTask);
router.put('/group-task/:id', taskController.putGroupTask);
router.put('/task/:id', taskController.putTask);
router.delete('/group-task/:id', taskController.deleteGroupTask);
router.delete('/task/:group_id/:task_id', taskController.deleteTask);

module.exports = router;