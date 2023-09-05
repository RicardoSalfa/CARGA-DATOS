const {Router} = require('express');
const pool = require('../db');

const {
    getAllTasks,
    getTask,
    createTasks,
    deleteTask,
    updateTask,
  } = require("../controllers/tasks.controller.js");


const router = Router();

router.get('/tasks', getAllTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks', createTasks);

router.delete('/tasks/:id', deleteTask);

router.put('/tasks/:id', updateTask);


module.exports = router;