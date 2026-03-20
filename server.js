const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mySqlPool = require("./config/db");

//config
dotenv.config();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/student", require("./routes/studentsRoutes"))

app.get("/test", (req, res) => {
  res.status(200).send("<h1>Nodejs Mysql App 1</h1>");
});

//port
const PORT = process.env.PORT || 8000;

//conditionaly listen
mySqlPool
  .query("SELECT 1")
  .then(() => {
    //MySQL
    console.log("MySQL DB Connected".bgCyan.white);
    
    //listen
    app.listen(PORT, () => {
      console.log(
        `Server running on http://localhost:${process.env.PORT}`.bgMagenta
          .white,
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
