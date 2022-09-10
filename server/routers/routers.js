const express = require("express");
// const models = require("../models/schema");
const router = express.Router();

const {
  getsingledocument,
  getalldocuments,
  createdocument,
  deletesingledocument,
  updatesingledocument,
} = require('./../controllers/controllersapi');   


// get all data
router.get("/", getalldocuments);

// get single data
router.get("/:id", getsingledocument);

// insert or post data
router.post("/", createdocument);

// update data
router.patch("/:id", updatesingledocument);

// Delete data
router.delete("/:id", deletesingledocument);

module.exports = router;
