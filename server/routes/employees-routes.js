const express = require('express')
const employeesRoutes = require('./../controllers/employees-controller.js')
const router = express.Router();

// Add route for GET request to retrieve all employees
// In server.js, employees route is specified as '/employees'
// this means that '/all' translates to '/employees/all'
router.get('/all', employeesRoutes.employeesAll);

// Add route for POST request to create new book
router.post('/create', employeesRoutes.employeesCreate);

//Export router
module.exports = router