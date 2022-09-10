// const { default: mongoose } = require("mongoose");
const models = require("../models/schemamodel");
const mongoose = require("mongoose");

// get single document
const getsingledocument = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "an Invalid id" });
  }
  const data = await models.findById(id);

  if (!data) {
    return res.status(404).json({ error: "Not Found data" });
  }

  res.status(200).json(data);
};

// get all documents

const getalldocuments = async (req, res) => {
  const data = await models.find({}).sort({ createdAt: -1 });
  res.status(200).json(data);
};

// Create a new document

const createdocument = async (req, res) => {
  const { name, title, phone, address } = req.body;
  try {
    const studentData = await models.create({ name, title, phone, address });
    res.status(200).json(studentData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete single document

const deletesingledocument = async (req, res) => {
  const { id } = req.params;
  const data = await models.deleteOne({ _id: id });

  if (!data) {
    res.status(404).json({ error: "Document not found" });
  }

  res.status(200).json({ sucess: "successfully deleted" });
};

// update single document

const updatesingledocument = async (req, res) => {
  const { id } = req.params;
  const name = req.body.name;
  const phone = req.body.phone;
  const title = req.body.title;
  const address = req.body.address;
  const data = await models.findByIdAndUpdate(
    { _id: id },
    { $set: { name: name, phone: phone, title: title, address: address } }
  );
  if (!data) {
    res.status(404).json({ error: "Document not found" });
  }

  res.status(200).json({ sucess: "successfully updated" });
};

module.exports = {
  getsingledocument,
  getalldocuments,
  createdocument,
  deletesingledocument,
  updatesingledocument,
};
