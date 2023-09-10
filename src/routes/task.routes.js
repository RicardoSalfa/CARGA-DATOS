const { Router } = require('express');
const pool = require('../db');

const {
  getAllTasks,
  getTask,
  createTasks,
  deleteTask,
  updateTask,
  createUsers,
  getAllusers,
  deleteUser,
  getUser,
  updateUser,
} = require("../controllers/tasks.controller.js");


const router = Router();

router.post('/users', createUsers);

router.get('/users', getAllusers);

router.get('/users/:id', getUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

router.get('/tasks', getAllTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks', createTasks);

router.delete('/tasks/:id', deleteTask);

router.put('/tasks/:id', updateTask);


module.exports = router;