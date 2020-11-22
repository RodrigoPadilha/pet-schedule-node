const express = require('express');

const AttendanceController = require('./controllers/Attendance');

const routes = express.Router();

routes.get('/attendance', AttendanceController.index);

module.exports = routes;