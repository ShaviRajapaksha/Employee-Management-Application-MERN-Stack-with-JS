const e = require('express');
const Employee = require('../models/employee_model');

// Create a new employee
const createEmployee = async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createEmployee = createEmployee;

