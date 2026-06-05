 const uploads = require("../middleware/uploadsFile")
const {postResumeReport,getTopCandidateResume,veiwResumeReport} = require("../controller/resumeReport.controller")
 
 const express = require("express")
const { authMiddleware } = require("../middleware/authMiddleware")
 const router = express.Router()

router.post("/report", authMiddleware ,uploads.array("files",100), postResumeReport)
router.get("/topCandidate",getTopCandidateResume)
router.get("/viewResume/id",veiwResumeReport)

 module.exports = router