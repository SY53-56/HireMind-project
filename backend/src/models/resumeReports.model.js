const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    // Uploaded Resume File
    resumeFile: {
      type: String,
      required: true,
    },

    // Job Description
    jobDescription: {
      type: String,
      required: true,
    },

    // AI Resume Match Score
    resumeScore: {
      type: Number,
      default: 0,
    },

    // Resume Rank
    rank: {
      type: Number,
    },

    // AI Shortlisting Status
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

    // Top 10 Candidate
    topCandidate: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Fast filtering
resumeSchema.index({ resumeScore: -1 });

module.exports = mongoose.model(
  "Resume",
  resumeSchema
);