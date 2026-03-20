const express = require('express');
const { getStudents } = require('../controllers/studentController');

// router object
const router = express();

// routes


// GET ALL STUDENT LIST || GET
router.get('/get-all',getStudents);

module.exports = router;

