const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
const patientModel = require("./patientSchema");
// define a port
let Port = process.env.PORT || 4000;
// routes and controller (minimal code)
app.get("/", () => {
  console.log("App is working..");
});
// postPatient + route + controller
app.post("/postPatient", async (req, res) => {
  try {
    let pateints = new patientModel(req.body);
    let allPateints = await pateints.save();
    if (allPateints) {
      res.status(201).json({ allPateints });
    }
  } catch (error) {
    console.log("Got an error in postPatient route controller", error);
  }
});

// return the data
app.get("/getdata", async (req, res) => {
  try {
    let allPateints = await patientModel.find();
    if (allPateints) {
      res.status(200).json({ allPateints });
    }
  } catch (error) {
    console.log("Got an error in getdata route controller", error);
  }
});
// Run server
app.listen(Port, () => {
  console.log("Server is up and running at port", Port);
  // after run server connect the database
  mongoose.set("strictQuery", false);
  mongoose
    .connect(
      "mongodb+srv://waqasKhan:bughlani1122@cluster0.agwp7.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Database connect");
    })
    .catch((e) => {
      console.log("Err while connect db", e);
    });
});
