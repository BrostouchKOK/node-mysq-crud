const express = require("express");
const {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
} = require("../controllers/studentController");

// router object
const router = express();

// routes

// GET ALL STUDENT LIST || GET
router.get("/get-all", getStudents);
// GET STUDENT BY ID
router.get("/get/:id", getStudentById);
// CREATE STUDENT || POST
router.post("/create", createStudent);
// UPDATE STUDENT || PUT
router.put("/update/:id",updateStudent)

module.exports = router;
