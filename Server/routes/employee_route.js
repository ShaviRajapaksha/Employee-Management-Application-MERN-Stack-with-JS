const express = require('express');
const router = express.Router();

const { createEmployee } = require('../controllers/employee_controller');

router.post('/employees', createEmployee);

module.exports = router;
