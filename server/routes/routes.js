const express = require('express');
const router = express.Router();
const userController = require('./../controllers/user-controller');
const taskController = require('./../controllers/task-controller');
const authMiddleware = require('./../utils/authMiddleware');

// user routes
router.post('/signup', userController.postUser);
router.put('/user/:id', authMiddleware, userController.putUser);
router.delete('/user/:id', authMiddleware, userController.deleteUser);

// task routes
router.get('/task-groups/:user_id', authMiddleware, taskController.getTasks);
router.get('/task/:id', authMiddleware, taskController.getTaskById);
router.post('/group-task', authMiddleware, taskController.postGroupTask);
router.post('/task/:id', authMiddleware, taskController.postTask);
router.put('/group-task/:id', authMiddleware, taskController.putGroupTask);
router.put('/task/:id', authMiddleware, taskController.putTask);
router.delete('/group-task/:id', authMiddleware, taskController.deleteGroupTask);
router.delete('/task/:group_id/:task_id', authMiddleware, taskController.deleteTask);

module.exports = router;