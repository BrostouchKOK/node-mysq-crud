const express = require('express');
const { getStudents, getStudentById } = require('../controllers/studentController');

// router object
const router = express();

// routes

// GET ALL STUDENT LIST || GET
router.get('/get-all',getStudents);
// GET STUDENT BY ID
router.get("/get/:id",getStudentById);

module.exports = router;

