 const uploads = require("../config/uploadsFile")
const {postResumeReport,getTopCandidateResume,veiwResumeReport} = require("../controller/resumeReport.controller")
 
 const express = require("express")
 const router = express.Router()

router.post("/report",uploads.single("file"), postResumeReport)
router.get("/topCandidate",getTopCandidateResume)
router.get("/viewResume/id",veiwResumeReport)

 module.exports = router