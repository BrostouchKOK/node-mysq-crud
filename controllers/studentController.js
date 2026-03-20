const db = require("../config/db");

// GET ALL STUDENT LIST
const getStudents = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM students");
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No Records found",
      });
    }
    res.status(200).send({
      success: true,
      message: "All Students Records",
      totalStudents: data[0].length,
      data: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get All Student API",
      error,
    });
  }
};

// GET STUDENT BY ID
const getStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    if(!studentId){
        return res.status(404).send({
            success: false,
            message: "Invalid or Provide Student id"
        })
    }
    // const data = await db.query(`SELECT * FROM students WHERE id = ?`,[studentId])
    const data = await db.query(`SELECT * FROM students WHERE id =`+studentId)
    if(!data){
        return res.status(404).send({
            success: false,
            message: "No records found"
        })
    }
    res.status(200).send({
        success: true,
        studentDetails: data[0],
    })

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get Student By Id API",
      error,
    });
  }
};

module.exports = { getStudents,getStudentById};
