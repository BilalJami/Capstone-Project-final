const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const router = require("./routers/routers.js");

// midleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/apiworks", router);
// app.get('/',(req,res) =>{
//     res.json({msg: 'success message from api'})
// })

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `mongodb connect & app listening on port ${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
