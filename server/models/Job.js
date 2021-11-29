const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const dateFormat = require("../utils/dateFormat");

const jobSchema = new Schema(
  {
    jobtitle: {
      type: String,
      required: "You need to leave a title!",
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: false,
    },
    requirements: {
      type: String,
      required: true,
    },
    linktowebsite: {
      type: String,
      required: false,
    },
    roletype: {
      type: String,
      required: true,
    },
    benefits: {
      type: String,
      required: false,
    },
    salary: {
      type: String,
      required: true,
    },
    additionalinfo: {
      type: String,
      required: false,
    },
    resume: {
      type: Buffer,
      required: false,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
