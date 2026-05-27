const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    resumeFile: {
      type: String,
      required: true,
    },

    jobDescription: {
      type: String,
      required: true,
    },

    resumeScore: {
      type: Number,
      default: 0,
    },

    rank: {
      type: Number,
    },

    status: {
      type: String,
      enum: [
        "selected",
        "rejected",
        "shortlisted",
        "pending",
      ],
      default: "pending",
    },

    topCandidate: {
      type: Boolean,
      default: false,
    },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"user"
    }
  },
  {
    timestamps: true,
  }
);

resumeSchema.index({ resumeScore: -1 });

module.exports = mongoose.model("Resume", resumeSchema);